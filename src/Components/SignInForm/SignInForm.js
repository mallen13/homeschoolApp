import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValidationText: 'N/A',
            formValidationTextClass: 'formValidationText transparent'
        };

        //create references
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        
    }

    //form submission
    handleSubmit = (e) => {
        e.preventDefault();

        if (  //email conditions
            this.emailInput.current.value.includes(' ') === true ||
            this.emailInput.current.value.includes('@') === false ||
            this.emailInput.current.value.includes('.') === false ||
            this.emailInput.current.value.length < 7
        ) {
            this.setState({
                formValidationText: "Invalid email or password.",
                formValidationTextClass: 'formValidationText red'
            });
            this.emailInput.current.value = '';
            this.passwordInput.current.value = '';
            this.passwordInput.current.blur();
            this.emailInput.current.blur();

        } else if ( //pw conditions
            this.passwordInput.current.value.includes(' ') === true ||
            this.passwordInput.current.value.length < 6
        ) {
            this.setState({
                formValidationText: "Invalid email or password.",
                formValidationTextClass: 'formValidationText red'
            });
            this.passwordInput.current.value = '';
            this.emailInput.current.value = '';
            this.passwordInput.current.blur();
            this.emailInput.current.blur();

        } else {
            this.authenticate();
        }
    }

    //authenticate user
    authenticate = () => {
        if (
            this.emailInput.current.value === 'demo@demo.com' && this.passwordInput.current.value === 'Demo4567'
        ) {
            this.props.changeRoute('authenticated');
        } else {
            this.emailInput.current.value = '';
            this.passwordInput.current.value = '';
            this.setState({
                formValidationText: "Invalid email or password.",
                formValidationTextClass: 'formValidationText red',
            });
            this.passwordInput.current.blur();
            this.emailInput.current.blur();
        }
          
    }
    
    render() {
        return (
            <form className='flexCenter popupForm loginForm' onSubmit={this.handleSubmit} >

                <div className='formContainer'>
                   {/* Back Button */}
                    <div className='popupFormNav'>
                        <button className='iconBtn' onClick={() => this.props.changeRoute('menu')}>
                            <ChevronLeft className='icon' size={25} /> Back
                        </button>
                    </div>
                     
                    {/* Logo */}
                    <div className='flexCenter'>
                        <div className='flexCenter placeholderImg'>
                            Logo
                        </div>

                    {/* Email Input */}
                        <div>
                            <label>Email Address:</label><br />
                            <input ref={this.emailInput} name='registerEmail' type='text' onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                   e.preventDefault();
                                   this.handleSubmit(e);
                                }
                            }} />
                        </div>
                    
                     {/* PW Input */}
                        <div>
                            <label>Password:</label><br />
                            <input ref={this.passwordInput} name='registerPassword' type='password' onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                   e.preventDefault();
                                   this.handleSubmit(e);
                                }
                            }} />
                        </div>

                        <button className='formSubmitBtn' type='submit'>Sign In</button>
                        <button className='linkBtn' onClick={ () => this.props.changeRoute('recovery') }>Forgot Username/ Password</button>
                        <p className={this.state.formValidationTextClass}>{this.state.formValidationText}</p>

                        

                    </div>

                </div>

            </form>
        )
    }
}

export default SignInForm;