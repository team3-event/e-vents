import React from "react";
import "./Main.css"
import Query from "./Query"
import Header from "./Header";
import axios from "axios";
import Travel from "./Travel";
import Accomodation from "./Accomodation";
import EventInfo from "./EventInfo";
import UserData from "./UserData.js"
import GroupData from "./GroupData.js"
import SetGroup from "./SetGroup.js"
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
            groupMatches: [],

            //For sending to database
            userId: '',
            currentGroupId: 0,
            selectedEvent: {},
            selectedFlight: {},
            selectedHotel: {},
            loading: false,
            eventLoading: false,
            showHotel: false,
            showEvents: false
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
        
        await this.setState({ 
            queryData: userQuery, 
            loading: true
        });
        this.setState({ 
            userId : this.props.user.email,
            userEmail : this.props.user.email
        })
        await this.getHotelData();
        await this.getFlightData();
        await this.getEventData();
        }

    updateUserId = () => {
        this.setState({ 
            userId : this.props.user.email,
        })
    }

    updateGroupId = (item) => {
        this.setState({ 
            currentGroupId: item,
        })
    }

    getUserData = async () => {
        try {
            this.updateUserId();
            console.log('hi');
            const response = await axios.get(`${process.env.REACT_APP_URL}/userEvents/${this.state.userId}`)
            this.setState({ userEvents: response.data });
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    }

    getUserGroupData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/groupEvents/${this.state.currentGroupId}`)
            this.setState({ groupEvents: response.data })
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    getUserGroupMatch = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/groupMatch/${this.state.userId}`)
            this.setState({ groupMatches: response.data })
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    getHotelData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/hotels?city=${this.state.queryData.arrivingCity}`, this.state.queryData.arrivingCity)
            this.setState({ 
                hotelData: response.data,
                loading : false,
                eventLoading: true,
                showHotel : true
             })
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
            this.setState({ 
                eventData: response.data,
                eventLoading: false,
                showEvents: true})
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
        })
        this.getUserGroupMatch();
        console.log(this.state.userId);
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

                {this.state.loading && 
                <div role="status">
                <svg aria-hidden="true" className="" class="mx-auto mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>}

            {this.state.eventLoading &&
            <div role="status">
                <svg aria-hidden="true" className="" class="mx-auto mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
                }
            {this.state.showHotel &&
                <Accomodation getHotel={this.getSelectedAccomodation} allData={this.state.queryData} queryData={this.state.hotelData} />}
            {this.state.showEvents && 
                <EventInfo getEvent={this.getSelectedEvent} queryData={this.state.eventData} />}

                <UserData getUserData={this.getUserData} userEvents={this.state.userEvents}/>
                <GroupData getUserGroupData={this.getUserGroupData} groupMatches={this.state.groupMatches} groupEvents={this.state.groupEvents} updateGroupId={this.updateGroupId}/>
                {/* <SetGroup updateGroupId={this.updateGroupId}/> */}
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