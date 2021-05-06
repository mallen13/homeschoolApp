import React from 'react';
import { ArrowsAngleExpand, ChevronRight} from 'react-bootstrap-icons'; 

class ManageTab extends React.Component {
    constructor() {
        super();
        this.state = {
            route: '',
            menuBtnContent: 'displayNone',
            menuBtnClass: ''
        };
    }

    menuBtnClick = () => {
        if (this.state.menuBtnContent === 'displayNone') {
           this.setState({menuBtnContent: 'menuBtnExpanded'});
        } else {
            this.setState({menuBtnContent: 'displayNone'});
        }
    }

    markComplete = () => {
        if (window.confirm("Mark Complete?")) {
            alert('Marked Complete')
        }  
    }

    render() {
        return (
          <div>
               <button className='menuBtnContainer' onClick={this.menuBtnClick}>
                    <div className='menuBtn'>
                        Manage Students
                        <ArrowsAngleExpand size={20} />
                    </div>

                    <div className='menuBtn'>
                        Manage Classes
                        <ArrowsAngleExpand size={20} />
                    </div>
                </button>
          </div>
         
        
        )
    }
}

export default ManageTab;