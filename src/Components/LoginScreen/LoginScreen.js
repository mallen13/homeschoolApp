import React from 'react';
import './LoginScreen.css';
import SignInForm from '../SignInForm/SignInForm';
import ForgotForm from '../ForgotForm/ForgotForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            route: ''
        };
    }

    changeRoute = (route) => {
        if (route === "loggedIn") {
            this.props.loginStatus(true);
        } else {
            this.setState({route: route});
        }
    }

    render() {

        return (
            <div className='loginScreen'>

                <div className='flexCenter'>
                   <div className='flexCenter logoPlaceholderLogin'>Logo</div>
                   <h1 className='loginScreenTitle'>Homeschool Organizer</h1>
                </div>
                 
                <Router>

                    { this.state.route ? <Redirect to={this.state.route}/> : <Redirect to='/menu' /> }

                    <Switch>
                        <Route path="/menu">
                            <div className='flexCenter'>
                                <button className='loginScreenBtn' onClick={ () => {this.changeRoute('login')} }>Sign In</button>
                                <button className='loginScreenBtn' onClick={ () => {this.changeRoute('register')} }>Register</button>
                            </div>
                        </Route>
                        <Route path="/login">
                           <SignInForm changeRoute={this.changeRoute}  />
                        </Route>
                        <Route path="/recovery">
                           <ForgotForm changeRoute={this.changeRoute} />
                        </Route>
                        <Route path="/register">
                           <RegisterForm changeRoute={this.changeRoute} />
                        </Route>
                    </Switch>
                </Router>

            </div>

        )
    }
}

export default LoginScreen;