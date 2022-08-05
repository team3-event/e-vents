import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import Form from 'react-bootstrap/Form';



class SetGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        groupId: 0
    }
  }
  
  handleSubmit = (e) => {
    e.prevent.default();
    console.log(e);
    this.props.updateGroupId(this.state.groupId);
  }

  handleChange = (e) => {
    this.setState({groupId: e.target.value})
  }

    render() {
        return (
          <Form onSubmit={this.handleSubmit} style={{marginTop: "3rem", width: "20rem"}} className="mb-3">
                
                <Form.Control onChange={this.handleChange} type="number" min={0} ></Form.Control>
                <Button variant="primary" type='submit'>Select Group</Button>
            </Form>
        )
    }
}

export default SetGroup;