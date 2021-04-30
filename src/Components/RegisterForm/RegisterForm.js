import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <form className='popupForm'>

                <div className='popupFormNav'>
                    <button className='iconBtn' onClick={() => this.props.changeRoute('splash')}>
                        <ChevronLeft className='icon' size={20} /> Back
                    </button>
                </div>

                <div className='flexCenter'>
                    <div className='flexCenter placeholderImg'>
                        Logo
                    </div>

                    <h3 className='loginScreenFormTitle' >Register</h3>

                    <div>
                        <label>Email Address:</label><br />
                        <input name='registerEmail' type='text' />
                    </div>

                    <div>
                        <label>Username:</label><br />
                        <input name='registerUsername' type='text' />
                    </div>
                
                    <div>
                        <label>Password:</label><br />
                        <input name='registerPassword' type='password' />
                    </div>

                    <p className='invalidText'>Invalid email address.</p>

                    <input className='formSubmitBtn' type='submit' value='Create Account' />
                </div>

            </form>
        )
    }
}

export default RegisterForm;