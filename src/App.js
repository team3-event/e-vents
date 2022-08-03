
import Main from './components/Main.js';
import React from 'react';
import Login from './components/auth/Login.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Login />
      </div>
      
    );
    }
  
  
}

export default App;
