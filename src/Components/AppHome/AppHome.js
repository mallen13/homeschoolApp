import React from 'react';
import './AppHome.css';
import TopBar from '../TopBar/TopBar';
import NavBar from '../NavBar/NavBar';
import HomeTab from '../HomeTab/HomeTab';
import ManageTab from '../ManageTab/ManageTab';
import ReportsTab from '../ReportsTab/ReportsTab';
import ProfileTab from '../ProfileTab/ProfileTab';

class AppHome extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'home',
            rightColumnClass: 'rightColumn hideOnMobile'
        };
    }

    changeRoute = (route) => {
        this.setState({ route: route });
    }

    displayForm = () => {
        if (this.state.rightColumnClass === 'rightColumn') {
            this.setState({rightColumnClass: 'rightColumn hideOnMobile'});
        } else {
            this.setState({rightColumnClass: 'rightColumn'});
        }
    }

    render() {
        
        switch (this.state.route) {
            case 'home':
                return (
                    <div className='appHome'>
                          <TopBar />
                          <div className='appBodyContainer'>
                              <NavBar newRoute={this.changeRoute} />
                              <HomeTab displayForm={this.displayForm} />
                              <div className={this.state.rightColumnClass}>
                                <div className='flexCenter popupForm'>
                                    Nothing to show/ Edit Task Form
                                   <button onClick={this.displayForm}>Back</button>
                                </div>
                              </div>
                          </div>
                    </div>
                  );

            case 'manage':
                return (
                    <div className='appHome'>
                          <TopBar />
                          <div className='appBodyContainer'>
                              <NavBar newRoute={this.changeRoute} />
                              <ManageTab />
                              <div className={this.state.rightColumnClass}>
                                <div className='flexCenter popupForm'>
                                    Nothing to show/ Edit or Add
                                   <button onClick={this.displayForm}>Back</button>
                                </div>
                              </div>
                        </div>
                    </div>
                  );

            case 'reports':
                return (
                    <div className='appHome'>
                          <TopBar />
                          <div className='appBodyContainer'>
                              <NavBar newRoute={this.changeRoute} />
                              <ReportsTab />
                              <div className={this.state.rightColumnClass}>
                                <div className='flexCenter popupForm'>
                                    Nothing to show
                                   <button onClick={this.displayForm}>Back</button>
                                </div>
                              </div>
                        </div>
                    </div>
                  );

            case 'profile':
                return (
                    <div className='appHome'>
                          <TopBar />
                          <div className='appBodyContainer'>
                              <NavBar newRoute={this.changeRoute} />
                              <ProfileTab loginStatus={this.props.loginStatus}/>
                              <div className={this.state.rightColumnClass}>
                                <div className='flexCenter popupForm'>
                                    Nothing to show
                                   <button onClick={this.displayForm}>Back</button>
                                </div>
                              </div>
                        </div>
                    </div>
                  );
                  
            default: return null;
        }
    }
}

export default AppHome;