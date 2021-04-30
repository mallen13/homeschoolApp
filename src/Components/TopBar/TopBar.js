import React from 'react';
import './TopBar.css';

class TopBar extends React.Component {
    constructor() {
        super();
        this.state = {
            route: ''
        };
    }

    render() {
        return (
          <div className='flexCenter flexRow topBar'>
              <div className='flexCenter topLogo'>Logo</div>
              <h2 className='topText'>Homeschool Organizer</h2>
          </div>
        )
    }
}

export default TopBar;