import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import InputGroup from "react-bootstrap/InputGroup"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class GroupData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        dropDown: 'Group Number'
    }
}

  handleClick = (e) => {
    
    this.props.getUserGroupData();
  }

  dropdown = (e) => {
    this.setState({ dropDown: e.target.name });
    
    this.props.updateGroupId(e.target.name);
  }  

  render() {
      return (
          <div>
            <div>
              <Button variant="primary" style={{backgroundColor: "#22d3ee"}} onClick={this.handleClick}>Review your Group Journeys</Button>
              
            <InputGroup style={{marginTop: "3rem", width: "90rem"}} className="mb-3">

<DropdownButton
    variant="outline-secondary"
    title={`${this.state.dropDown}`}
    id="event-selection"
>
    {this.props.groupMatches.map(number => (
      <Dropdown.Item onClick={this.dropdown} name={number} >{number}</Dropdown.Item>
    ))}
    
</DropdownButton>


<Button variant="primary" style={{backgroundColor:"#22d3ee"}} onClick={this.handleSubmit} type='button'>Set Group</Button>
</InputGroup>
            </div>
            
            <Row className="mx-auto gap-0">
              {this.props.groupEvents.map((event, idx) => (
                <Col id={idx+100}>
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
export default GroupData;