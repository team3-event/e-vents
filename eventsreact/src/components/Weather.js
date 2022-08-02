import React from "react";
import axios from "axios";



class Weather extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    gatherWeather = (lat, lon) => {
        let url = `/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.query}`
        axios.get(url).then(response => {
            this.props.weather(response.data);
        })
    }

    render() {
        return (
            <div>
              <h2>Weather Info</h2>
            </div>
        )
    }
}

export default Weather;