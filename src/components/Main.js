import React from "react";
import "./Main.css"
import Query from "./Query"
import Header from "./Header";
import axios from "axios";
import Weather from "./Weather";
import Travel from "./Travel";
import Accomodation from "./Accomodation";
import EventInfo from "./EventInfo";




class Main extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
handleQueryResponse = (response) => {

}

    render() {
        return (
            <div>
                <Header/>
                <Query passResponse={this.handleQueryResponse}/>
                <EventInfo/>
                <Weather/>
                <Travel/>
                <Accomodation/>
            </div>
        )
    }
}

export default Main;