import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class ForgotForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <form className='flexCenter loginScreenForm'>

                <button className='iconBtn iconBtnWhite' onClick={() => this.props.changeRoute('login')}>
                    <ChevronLeft className='iconWhite icon' size='20' /> Back
                </button>

                <label className='loginScreenLabel'>Forgot Username/ Password</label>

                <div>
                    <label className='labelWhite' htmlFor='forgotEmail'>Email Address:</label><br />
                    <input name='forgotEmail' type='text' placeholder='Email Address' /> 
                </div>

                <p className='loginScreenSubmissionText'>Invalid email address.</p>

                <input className='loginScreenSubmit' type='submit' value='Submit' />

            </form>
        )
    }
}

export default ForgotForm;