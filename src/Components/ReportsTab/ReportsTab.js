import React from 'react';
import './ReportsTab.css';

class ReportsTab extends React.Component {
    constructor() {
        super();
        this.state = {
            route: ''
        };
    }

    render() {
        return (
          <div className='flexCenter'>
              <h2>Reports Tab Coming Soon...</h2> <p>(Maybe Name tracking)</p>
          </div>
        )
    }
}

export default ReportsTab;