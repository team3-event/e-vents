import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class UserData extends React.Component {


  handleClick = (e) => {
    this.props.getUserData();
  }

  render() {
      return (
          <div>
            <div>
              <Button variant="primary" style={{backgroundColor: "#22d3ee"}} onClick={this.handleClick}>Review your Journeys</Button>
            </div>
            <Row>
              {this.props.userEvents.map((event, idx) => (
                <Col id={idx}>
                  <Card>
                    <Card.Body >
                      <Card.Title>{event.event.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{`${event.flight.arrLocation} to ${event.flight.depLocation}`}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">{`Staying at ${event.hotels.name}`}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
      )
  }
}
export default UserData;