import React from 'react';
import './HomeTab.css';
import { ArrowsAngleExpand, ChevronRight, CheckSquare} from 'react-bootstrap-icons'; 

class HomeTab extends React.Component {
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
                {/* Children Tasks */}
                <div className='menuBtnContainer'>
                    <button className='menuBtn' onClick={this.menuBtnClick}>
                        <div className='flexCenter flexRow'>
                            <p>MyTasks</p>
                            <span className='taskCount'>0</span>
                        </div>
                        <ArrowsAngleExpand size={20} />
                    </button>

                    {/*Task */}
                    <div className={this.state.menuBtnContent}>
                            <div>
                            <p>Math</p>
                            <p>Lesson 1</p>
                            </div>
                    
                            <div>
                            <button className='iconBtn' onClick={this.markComplete}>
                                        <CheckSquare className='icon' size={25} />
                            </button>
                            <button className='iconBtn' onClick={ () => this.props.displayForm() } >
                                        <ChevronRight className='icon' size={25} />
                            </button>
                            </div>
                        </div>
                </div>
          </div>
         
        
        )
    }
}

export default HomeTab;