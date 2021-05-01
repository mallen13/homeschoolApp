import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSubmit = (e) => {
        this.props.changeRoute('loggedIn');
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

                    <div className='flexCenter'>
                        <div className='flexCenter placeholderImg'>
                            Logo
                        </div>

                        <p className='loginScreenFormTitle' >Sign In</p>

                        <div>
                            <label>Username:</label><br />
                            <input name='signInUsername' type='text' />
                        </div>
                    
                        <div>
                            <label>Password:</label><br />
                            <input name='signInPassword' type='password' />
                        </div>

                        <p className='invalidText'>Invalid email address. </p>

                        <button className='formSubmitBtn' type='submit'>Submit</button>

                        <button className='linkBtn' onClick={() => this.props.changeRoute('recovery')}>Forgot Username/ Password</button>
                    </div>

                </div>

            </form>
        )
    }
}

export default SignInForm;