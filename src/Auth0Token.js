import { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

class Auth0Token extends Component {

    constructor() {
        super();
        this.state ={
            list: []
        }
    }

    async componentDidMount() {
        let res = await this.props.auth0.getIdTokenClaims();

        let token = res.__raw;
        console.log(token);
        let response = await axios.get('http://localhost:3001/login', {headers: {"Authorization": `Bearer ${token}`}});
        console.log(response);
    }

    render() {
        return (
            <div>
                {this.state.list.map(value => (
                    <p>{value.name}</p>
                ))}
            </div>
        )
    }
}

export default withAuth0(Auth0Token);