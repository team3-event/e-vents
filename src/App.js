
import Main from './components/Main.js';
import React from 'react';
import Login from './components/auth/Login.js';
import Auth0Token from './Auth0Token.js';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const  {user} = useAuth0();


  
    return (
      <div>

        <Main user={user}/>
        
        <Auth0Token />
      </div>
      
    );
    }
  

export default App;
