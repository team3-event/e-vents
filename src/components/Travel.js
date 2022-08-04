import React from "react";
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"


class Travel extends React.Component {
    
    render() {
        return (
            <div>
                <Row>
                <Card  bg="primary" text="light" style={{height:"20rem", width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    Price: {this.props.price}
                    </Card.Text>
                    <Card.Text>dtime: {this.props.dTime}</Card.Text>
                    <Card.Text>aTime: {this.props.aTime}</Card.Text>
                    <Card.Text>stop: {this.props.stop}</Card.Text>
             
                 </Card.Body>
                    
                </Card>
                </Row>



            </div>
        )
    }
}
export default Travel;
