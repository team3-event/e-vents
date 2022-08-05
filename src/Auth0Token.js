import React,{ Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

class Auth0Token extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    async componentDidMount() {
        
        if (this.props.auth0.isAuthenticated) {
            try {
                let res = await this.props.auth0.getIdTokenClaims();
                let token = res.__raw;
                
                let response = await axios.get(`${process.env.REACT_APP_URL}/login`, { headers: { "Authorization": `Bearer ${token}` } });
               
            } catch (e) {
                console.log(e);
            }
        }


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