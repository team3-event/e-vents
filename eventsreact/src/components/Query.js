import React from "react";
import Form from "react-bootstrap/Form"
import  Button  from "react-bootstrap/Button";
import axios from 'axios'


class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    handleChange = (e) => {
        let { value } = e.target;
        this.setState ({ query: value })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let search = this.state.query;
        //axios call here
        //this.props.passResponse(res)
    }

    render() {
        
        return (
            
            <Form onSubmit={this.handleSubmit} style={{margin:"auto" , width:"30rem", textAlign: "center"}}>
                <Form.Group>
                    <Form.Label  >Enter city or event name</Form.Label>
                    <Form.Control name="query" onChange={this.handleChange} type="text" placeholder="" />
                    <Form.Text>
                    </Form.Text>
                </Form.Group>
                <Button type='Submit'>Search</Button>
            </Form>
            
           
        )
    }
}

export default Query;