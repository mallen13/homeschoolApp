import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class ForgotForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSubmit = (e) => {
        alert('Email Sent');
        e.preventDefault();
     }

    render() {
        return (
            <form className='flexCenter popupForm' onSubmit={this.handleSubmit} >

                <div className='formContainer'>

                    <div className='popupFormNav'>
                        <button className='iconBtn' onClick={() => this.props.changeRoute('login')}>
                            <ChevronLeft className='icon' size={25} /> Back
                        </button>
                    </div>

                    <div className='flexCenter'>
                        <div className='flexCenter placeholderImg'>
                            Logo
                        </div>

                        <p className='loginScreenFormTitle' >Forgot Username/ Password</p>

                        <div>
                            <label>Email Address:</label><br />
                            <input name='recoveryEmail' type='text' />
                        </div>

                        <p className='invalidText'>Invalid email address.</p>

                        <button className='formSubmitBtn' type='submit'>Send Email</button>

                    </div>

                </div>

            </form>
        )
    }
}

export default ForgotForm;