import React from "react";
import "./Main.css"
import Query from "./Query"
import Header from "./Header";
import axios from "axios";
import Weather from "./Weather";
import Travel from "./Travel";
import Accomodation from "./Accomodation";
import EventInfo from "./EventInfo";
import AboutUs from "./AboutUs"





class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            url: "http://localhost:3001",
            queryData: {},
            eventData: [],
            flightData: {},
            hotelData: [],

            //To be displayed on main page - user journeys displayed one was and group along the right side of the page?
            userEvents: [],
            groupEvents: [],

            //For sending to database
            userId: 0,
            currentGroupId: 0,
            selectedEvent: {},
            selectedFlight: {},
            selectedHotel: {}
        }
    }

  

    handleQuery = async (userQuery) => {
        await this.setState({ queryData: userQuery });
        await this.getHotelData();
        await this.getFlightData();
        await this.getEventData();

        
    }

    getHotelData = async () => {
        try {
            const response = await axios.get(`${this.state.url}/hotels?city=${this.state.queryData.arrivingCity}`, this.state.queryData.arrivingCity)
            this.setState({ hotelData: response.data })
        } catch (e) {
            console.log(e)
        }
    }

    getFlightData = async () => {
        try {
            const response = await axios.get(`${this.state.url}/flights?eventType=${this.state.queryData.dropDown}&depLocation=${this.state.queryData.departingCity}&arrLocation=${this.state.queryData.arrivingCity}&fromDate=${this.state.queryData.startDate}&toDate=${this.state.queryData.endDate}`)
            console.log(response.data)
            this.setState({ flightData: response.data})
        } catch (e) {
            console.log(e)
        }
    }
    
    getEventData = async () => {
        try {
            const response = await axios.get(`${this.state.url}/events?eventType=${this.state.queryData.dropDown}&depLocation=${this.state.queryData.departingCity}&arrLocation=${this.state.queryData.arrivingCity}&fromDate=${this.state.queryData.startDate}&toDate=${this.state.queryData.endDate}`)
            console.log(response.data)
            this.setState({ eventData: response.data})
        } catch (e) {
            console.log(e)
        }
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
            await axios.post(`${this.state.url}/events`, journey)
            let updatedUserEvents = await axios.get(`${this.state.url}/userEvents/${this.state.userId}`)
            let updatedGroupEvents = await axios.get(`${this.state.url}/groupEvents/${this.state.currentGroupId}`)
            this.setState({ 
                userEvents: updatedUserEvents,
                groupEvents: updatedGroupEvents
            })
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        console.log(this.state.flightData);
        return (
            <div>
                <Header />
                <Query passQuery={this.handleQuery} />
                <EventInfo queryData={this.state.eventData} />
                <Weather />
                <Travel price={this.state.flightData.total} url={this.state.flightData.bookingUrl} dTime={this.state.flightData.departureTime} aTime={this.state.flightData.arrivalTime} stop={this.state.flightData.stopOverCount}/>
                <Accomodation queryData={this.state.hotelData} />
                <AboutUs />
            </div>
        )
    }
}

export default Main;