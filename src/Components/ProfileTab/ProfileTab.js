import React from 'react';
import './ProfileTab.css';
import {ChevronRight} from 'react-bootstrap-icons'; 

class ProfileTab extends React.Component {
    constructor() {
        super();
        this.state = {
            route: ''
        };
    }

    signOut = () => {

        if (window.confirm("Would you like to sign out?")) {
            this.props.loginStatus(false);
        }
        
    }

    render() {
        return (
          <div>
              <button className='menuBtn' onClick={this.signOut}>
                 Sign Out
                 <ChevronRight size={25}/>
          
              </button>
          </div>
        )
    }
}

export default ProfileTab;