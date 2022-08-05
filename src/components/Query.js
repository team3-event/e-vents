import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivingCity: '',
            departingCity: '',
            startDate: '',
            endDate: '',
            dropDown: 'Event type'
        }
    }

    handleChangeCity = (e) => {
        let { value } = e.target;
        this.setState({ arrivingCity: value })

    }
    handleChangeDepartingCity = (e) => {
        let { value } = e.target;
        this.setState({ departingCity: value })

    }
    handleChangeStartDate =(e) => {
        let { value } = e.target;
        this.setState({ startDate: value })
    }
    handleChangeEndDate =(e) => {
        let { value } = e.target;
        this.setState({ endDate: value })
    }
    handleSubmit = (e) => {
      this.props.passQuery(this.state)
     
        
    }

    dropdown = (e) => {
        this.setState({ dropDown: e.target.name });
    }
sendEmail = () => {
    this.props.sendEmail();
}
    render() {

        return (
            <>
            <InputGroup style={{marginTop: "3rem", width: "90rem"}} className="mb-3">

                <DropdownButton
                    variant="outline-secondary"
                    title={`${this.state.dropDown}`}
                    id="event-selection"
                >
                    <Dropdown.Item onClick={this.dropdown} name="sports" >Sports</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="festivals" >Festivals</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="concerts" >Concert</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="academic" >Academic</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="community" >Community</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="conferences" >Conferences</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="expos" >Expos</Dropdown.Item>
                    <Dropdown.Item onClick={this.dropdown} name="performingArts" >Performing Arts</Dropdown.Item>
                </DropdownButton>
                
                <Form.Control onChange={this.handleChangeCity} type="text" placeholder="Traveling to (city)" aria-label="Text input with dropdown button" />
                <Form.Control onChange={this.handleChangeDepartingCity} type="text" placeholder="from (city)" aria-label="Text input with dropdown button" />
                <InputGroup.Text>Arrive</InputGroup.Text><Form.Control  type="date" id="start" onChange={this.handleChangeStartDate} label="trip start" name="trip-start" min="2022-08-01" max="2023-08-01" />
                <InputGroup.Text>Departing</InputGroup.Text><Form.Control  type="date" id="end" onChange={this.handleChangeEndDate} name="trip-end" min="2022-08-01" max="2023-08-01" />
                <Button variant="primary"  type='button'>Search</Button>
                <Button onClick={this.sendEmail} type='button'>Load previous</Button>
            </InputGroup>
            <button
        type="button" onClick={this.handleSubmit}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-cyan-400 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Explore!
      </button>
            </>





        )
    }
}

export default Query;