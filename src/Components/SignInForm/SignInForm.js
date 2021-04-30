import React from 'react';

class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSubmit = () => {
        this.props.changeRoute('loggedIn');
    }

    render() {
        return (
            <form className='flexCenter loginScreenForm' onSubmit={this.handleSubmit}>

                <label className='loginScreenLabel'>Sign In</label>

                <div>
                    <label className='labelWhite' htmlFor='signInUsername'>Username:</label><br />
                    <input name='signInUsername' type='text' placeholder='Username' /> 
                </div>
               
                <div>
                    <label className='labelWhite' htmlFor='signInPassword'>Password:</label><br />
                    <input name='signInPassword' type='password' placeholder='Password' />
                </div>

                <p className='loginScreenSubmissionText'>Invalid username or password.</p>

                <input className='loginScreenSubmit' type='submit' value='Login' />

                <button className='linkBtn' onClick={() => this.props.changeRoute('register')}>Not a member? Sign Up</button>
                <button className='linkBtn' onClick={() => this.props.changeRoute('recovery')}>Forgot Username/ Password</button>

            </form>
        )
    }
}

export default SignInForm;