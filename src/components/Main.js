import React from "react";
import "./Main.css"
import Query from "./Query"
import Header from "./Header";
import axios from "axios";
import Travel from "./Travel";
import Accomodation from "./Accomodation";
import EventInfo from "./EventInfo";
import {useAuth0} from "@auth0/auth0-react"
import User from './user.js'
import { Next } from "react-bootstrap/esm/PageItem";



class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            queryData: {},
            eventData: [],
            flightData: {},
            hotelData: [],
            showFlights : false,

            //To be displayed on main page - user journeys displayed one was and group along the right side of the page?
            userEvents: [],
            groupEvents: [],

            //For sending to database
            userId: '',
            currentGroupId: 0,
            selectedEvent: {},
            selectedFlight: {},
            selectedHotel: {}
        }
    }

    
  

     componentDidMount = async () => {
        
        
       
        try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/userEvents/${this.state.userId}`)
        if (response.data !== '') {
            console.log(response.data)
        }
    }
    catch(e){
        console.log(e);
    }
    

     }
     
   
     handleQuery = async (userQuery) => {
        await this.setState({ queryData: userQuery });
        this.setState({ 
            userId : this.props.user.email,
            userEmail : this.props.user.email
        })
        console.log(this.props.user);
        await this.getHotelData();
        await this.getFlightData();
        await this.getEventData();

        
    }

    getHotelData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/hotels?city=${this.state.queryData.arrivingCity}`, this.state.queryData.arrivingCity)
            this.setState({ hotelData: response.data })
        } catch (e) {
            console.log(e)
        }
    }

    getFlightData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/flights?eventType=${this.state.queryData.dropDown}&depLocation=${this.state.queryData.departingCity}&arrLocation=${this.state.queryData.arrivingCity}&fromDate=${this.state.queryData.startDate}&toDate=${this.state.queryData.endDate}`)
            console.log(response.data)
            this.setState({ 
                flightData: response.data,
                selectedFlight : response.data,
                showFlights : true
            })
        } catch (e) {
            console.log(e)
        }
    }
    
    getEventData = async () => {
        try {
            //const {user} = useAuth0();
            console.log(this.props.user);
            const response = await axios.get(`${process.env.REACT_APP_URL}/events?eventType=${this.state.queryData.dropDown}&depLocation=${this.state.queryData.departingCity}&arrLocation=${this.state.queryData.arrivingCity}&fromDate=${this.state.queryData.startDate}&toDate=${this.state.queryData.endDate}`, {Authorization: `Bearer 0bQ1JrQsQFDEh0sht3AKtLmkUsdkyfoxkkeY0IFn`})
            console.log(response.data)
            this.setState({ eventData: response.data})
        } catch (e) {
            console.log(e)
        }
    }
    getSelectedAccomodation = async (item) =>{
        await this.setState({ selectedHotel : item });
    } 
    getSelectedEvent = async (item) =>{
        await this.setState({ selectedEvent : item });
    } 
    sendEmail= () =>{
        this.setState({ 
            userId : this.props.user.email,
            userEmail : this.props.user.email
        })
    }
    //This adds an event to the database and updates state for userEvents and groupEvents

    postSelectedJourney = async () => {
       let journey = {
        "userId": this.state.userId,
        "groupId": this.state.currentGroupId,
        "event": this.state.selectedEvent,
        "flight": this.state.selectedFlight,
        "hotels": this.state.selectedHotel
       }
        try {
            console.log(journey);
            await axios.post(`${process.env.REACT_APP_URL}/events`, journey)
            let updatedUserEvents = await axios.get(`${process.env.REACT_APP_URL}/userEvents/${this.state.userId}`)
            let updatedGroupEvents = await axios.get(`${process.env.REACT_APP_URL}/groupEvents/${this.state.currentGroupId}`)
            this.setState({ 
                userEvents: updatedUserEvents,
                groupEvents: updatedGroupEvents
            })
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        //console.log(this.state.flightData);
        return (
            <div>
                {/* <User handleUser = {this.setUser}/> */}
                <Header />
                <Query sendEmail={this.sendEmail} passQuery={this.handleQuery} />
                <Accomodation getHotel={this.getSelectedAccomodation} queryData={this.state.hotelData} />
                <EventInfo getEvent={this.getSelectedEvent} queryData={this.state.eventData} />
                {this.state.showFlights && 
                <Travel journey={this.postSelectedJourney} price={this.state.flightData.total} url={this.state.flightData.bookingUrl} dTime={this.state.flightData.departureTime} aTime={this.state.flightData.arrivalTime} stop={this.state.flightData.stopOverCount}/>
            }
            </div>
        )
    }
}

export default Main;