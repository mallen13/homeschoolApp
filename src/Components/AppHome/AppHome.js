import React from 'react';
import './AppHome.css';
import TopBar from '../TopBar/TopBar';
import NavBar from '../NavBar/NavBar';
import HomeTab from '../HomeTab/HomeTab';
import ManageTab from '../ManageTab/ManageTab';
import ReportsTab from '../ReportsTab/ReportsTab';
import ProfileTab from '../ProfileTab/ProfileTab';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

class AppHome extends React.Component {
    constructor() {
        super();
        this.state = {
            route: null
        };
    }

    changeRoute = (route) => {
        this.setState({route: route});
    }

    render() {
        return (
          <div className='appHome'>
                <TopBar />
                <div className='appBodyContainer'>

                    <NavBar newRoute={this.changeRoute} />

                    <Router>

                        { this.state.route ? <Redirect to={this.state.route}/> : <Redirect to='/home'/> }

                        <div className='middleColumn'>
                            <Switch >
                                <Route path="/home">
                                   <HomeTab />
                                </Route>
                                <Route path="/manage">
                                   <ManageTab />
                                </Route>
                                <Route path="/reports">
                                   <ReportsTab />
                                </Route>
                                <Route path="/profile">
                                   <ProfileTab loginStatus={this.props.loginStatus}/>
                                </Route>
                            </Switch>
                        </div>
                        
                    </Router>

                    <div className='rightColumn'>
                        Form
                    </div>

              </div>
          </div>
        )
    }
}

export default AppHome;