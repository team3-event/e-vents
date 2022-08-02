import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios'

let url = "http://localhost:3001"
class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            event: '',
            dropdown: 'Event type'
        }
    }

    handleChangeCity = (e) => {
        let { value } = e.target;
        this.setState({ city: value })

    }
    handleChangeEvent = (e) => {
        let { value } = e.target;
        this.setState({ event: value })

    }
    handleSubmit = (e) => {
        let Citysearch = this.state.city;
        let Eventsearch = this.state.event;
        axios.get(`${url}/events?city=${Citysearch}&event=${Eventsearch}&eventType=${this.state.dropdown}`, Citysearch).then(response => {
            this.props.passResponse(response);
            //this.props.passResponse(res)
        })

    }

    dropdown = (e) => {
        this.setState({ dropdown: e.target.name });
    }

    render() {

        return (

            <InputGroup className="mb-3">

                <DropdownButton
                    variant="outline-secondary"
                    title={`${this.state.dropdown}`}
                    id="event-selection"
                >
                    <Dropdown.Item onClick={this.dropdown} name="Sports" >Sports</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="Concert" >Concert</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="Sports" ></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Anything</Dropdown.Item>
                </DropdownButton>
                <Form.Control onChange={this.handleChangeCity} type="text" placeholder="Enter a city" aria-label="Text input with dropdown button" />
                <Form.Control onChange={this.handleChangeEvent} type="text" placeholder="Enter an event" aria-label="Text input with dropdown button" />
                <Button onClick={this.handleSubmit} type='button'>Search</Button>
            </InputGroup>





        )
    }
}

export default Query;