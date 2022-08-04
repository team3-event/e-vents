import React from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import axios from "axios";



class Accomodation extends React.Component {
    
    render() {
        return (
            <div>
                <Row>
                {this.props.queryData.map(hotel =>
                
                <Card key={hotel.name} bg="primary" text="light" style={{height:"20rem", width: '18rem' }}>
                    <AccomodationCards  name={hotel.name} price={hotel.bestPrice}/>
                </Card>)}
                </Row>



            </div>
        )
    }
}



class AccomodationCards extends React.Component {

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    Price: {this.props.price.price1}
                    </Card.Text>
                </Card.Body>
            </div>
        )
    }
}

export default Accomodation;