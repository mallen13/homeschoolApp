import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSubmit = (e) => {
       alert('Account Created');
       e.preventDefault();
    }
    
    render() {
        return (
            <form className='flexCenter popupForm' onSubmit={this.handleSubmit} >

                <div className='formContainer'>

                    <div className='popupFormNav'>
                        <button className='iconBtn' onClick={() => this.props.changeRoute('menu')}>
                            <ChevronLeft className='icon' size={25} /> Back
                        </button>
                    </div>

                    <div className='flexCenter formInputContainer'>
                        <div className='flexCenter placeholderImg'>
                            Logo
                        </div>

                        <p className='loginScreenFormTitle' >Register</p>

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

                        <button className='formSubmitBtn' type='submit'>Create Account</button>
                    </div>

                </div>

            </form>
        )
    }
}

export default RegisterForm;