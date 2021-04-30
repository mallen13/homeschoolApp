import React from 'react';
import './ProfileTab.css';

class ProfileTab extends React.Component {
    constructor() {
        super();
        this.state = {
            route: ''
        };
    }

    signOut = () => {

        if (window.confirm("Are you sure?")) {
            this.props.loginStatus(false);
        }
        
    }

    render() {
        return (
          <div>
              Profile Tab
              <button onClick={this.signOut}>Sign Out</button>
          </div>
        )
    }
}

export default ProfileTab;