import './App.css';
import React from 'react';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import AppHome from './Components/AppHome/AppHome';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  detectLoginStatus = (loginStatus = false) => {
    loginStatus ? this.setState({isLoggedIn: true}) : this.setState({isLoggedIn: false}) ;
  }

  render() {

      return (
        <Router>

            { this.state.isLoggedIn ? <Redirect to='/home' /> : <Redirect to='/login' />}

            <Switch>
                <Route path="/login">
                  <LoginScreen loginStatus={this.detectLoginStatus} />
                </Route>
                <Route path="/home">
                   <AppHome loginStatus={this.detectLoginStatus} />
                </Route>
            </Switch>

        </Router>
      );
  }
}

export default App;
