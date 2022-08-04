
import Main from './components/Main.js';
import React from 'react';
import Login from './components/auth/Login.js';
import Auth0Token from './Auth0Token.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Login />
        <Auth0Token />
      </div>
      
    );
    }
  
  
}

export default App;
