import React from 'react';
import './NavBar.css';
import { HouseDoor, BarChart, Calendar2Date, Person  } from 'react-bootstrap-icons'; 

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            route: ''
        };
    }

    render() {
        return (
          <div className='navBar'>
              <button className='navIconBtn' onClick={ () => this.props.newRoute('home') }>
                  <div className='navFlexContainer activeNavIcon'>
                     <HouseDoor size='25' className='navIcon activeNavIcon' /> Home
                  </div>
              </button>
              <button className='navIconBtn' onClick={ () => this.props.newRoute('manage') }>
                  <div className='navFlexContainer'>
                     <Calendar2Date size='25' className='navIcon' /> Manage
                  </div>
              </button>
              <button className='navIconBtn' onClick={ () => this.props.newRoute('reports') }>
                  <div className='navFlexContainer'>
                     <BarChart size='25' className='navIcon' /> Reports
                  </div>
              </button>
              <button className='navIconBtn' onClick={ () => this.props.newRoute('profile') }>
                  <div className='navFlexContainer'>
                     <Person size='25' className='navIcon' /> Profile
                  </div>
              </button>
          </div>
        )
    }
}

export default NavBar;