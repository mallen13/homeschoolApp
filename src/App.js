import './App.css';
import React from 'react';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import AppHome from './Components/AppHome/AppHome';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  detectLoginStatus = (loginStatus = false) => {
    loginStatus ? 
      this.setState({isAuthenticated: true}) : 
      this.setState({isAuthenticated: false}) ;
  }

  render() {

      switch (this.state.isAuthenticated) {
        case true:
           return (
             <AppHome loginStatus={this.detectLoginStatus} />
           );
        case false:
          return (
           <LoginScreen loginStatus={this.detectLoginStatus} />
          )
        default: return null;
            
      }

  }
}

export default App;
