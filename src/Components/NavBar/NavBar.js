import React from 'react';
import './NavBar.css';
import { HouseDoor, BarChart, Calendar2Date, Person  } from 'react-bootstrap-icons'; 

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTabClass: [
                'navFlexContainer activeNavIcon',
                'navFlexContainer',
                'navFlexContainer',
                'navFlexContainer'
            ]
        };
    }

    changeRoute = (route) => {
        this.props.newRoute(route);

        switch (route) {
            case 'home':
                this.setState({
                    activeTabClass: [
                        'navFlexContainer activeNavIcon',
                        'navFlexContainer',
                        'navFlexContainer',
                        'navFlexContainer'
                    ]
                }); break;

            case 'manage':
                this.setState({
                    activeTabClass: [
                        'navFlexContainer',
                        'navFlexContainer activeNavIcon',
                        'navFlexContainer',
                        'navFlexContainer'
                    ]
                }); break;

            case 'reports':
                this.setState({
                    activeTabClass: [
                        'navFlexContainer',
                        'navFlexContainer',
                        'navFlexContainer activeNavIcon',
                        'navFlexContainer'
                    ]
                }); break;
                
            case 'profile':
                this.setState({
                    activeTabClass: [
                        'navFlexContainer',
                        'navFlexContainer',
                        'navFlexContainer',
                        'navFlexContainer activeNavIcon'
                    ]
                }); break;
            
            default: return null;
                
        }
    }

    render() {
        return (
          <div className='navBar'>
            <button className='navIconBtn' onClick={ () => this.changeRoute('home') }>
                <div className={this.state.activeTabClass[0]}>
                    <HouseDoor size='25' className='navIcon' /> <p>Home</p>
                </div>
            </button>
        
            <button className='navIconBtn' onClick={ () => this.changeRoute('manage') }>
                <div className={this.state.activeTabClass[1]}>
                    <Calendar2Date size='25' className='navIcon' /> <p>Manage</p>
                </div>
            </button>

            <button className='navIconBtn' onClick={ () => this.changeRoute('reports') }>
                <div className={this.state.activeTabClass[2]}>
                    <BarChart size='25' className='navIcon' /> <p>Reports</p>
                </div>
            </button>

            <button className='navIconBtn' onClick={ () => this.changeRoute('profile') }>
                <div className={this.state.activeTabClass[3]}>
                    <Person size='25' className='navIcon' /> <p>Profile</p>
                </div>
            </button>     
          </div>
        )
    }
}

export default NavBar;