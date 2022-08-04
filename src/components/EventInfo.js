import React from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import axios from "axios";
import Button from "react-bootstrap/Button"



class EventInfo extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    {this.props.queryData.map(event =>

                        <Card key={event.name} bg="primary" text="light" style={{ height: "20rem", width: '18rem' }}>
                            <EventCards name={event.title} startDate={event.startDate} startTime={event.startTime} endDate={event.endDate} endTime={event.endTime} description={event.description} address={event.address} price={event.bestPrice} />
                        </Card>)}
                </Row>



            </div>
        )
    }
}



class EventCards extends React.Component {

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.startDate}</Card.Text>
                    <Card.Text>{this.props.startTime}</Card.Text>
                    <Card.Text>{this.props.endDate}</Card.Text>
                    <Card.Text>{this.props.endTime}</Card.Text>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>{this.props.address}</Card.Text>
                    <Button></Button>
                </Card.Body>
            </div>
        )
    }
}

export default EventInfo;