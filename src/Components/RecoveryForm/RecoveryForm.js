import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons'; 

class RecoveryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValidationText: 'N/A',
            formValidationTextClass: 'formValidationText transparent'
        };

        //create references
        this.emailInput = React.createRef();    
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
                formValidationText: "Invalid email address.",
                formValidationTextClass: 'formValidationText red'
            });
            this.emailInput.current.value = '';
         

        } else {
            this.sendRecoveryEmail();
        }
    }

    //send recovery email
    sendRecoveryEmail = () => {
            this.emailInput.current.value = '';
            this.setState({
                formValidationText: "Recovery email sent, if valid.",
                formValidationTextClass: 'formValidationText green',
            });
            
    }
    
    render() {
        return (
            <form className='flexCenter popupForm loginForm' onSubmit={this.handleSubmit} >

                <div className='formContainer'>
                   {/* Back Button */}
                    <div className='popupFormNav'>
                        <button className='iconBtn' onClick={() => this.props.changeRoute('login')}>
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
                    
                        <button className='formSubmitBtn' type='submit'>Send Email</button>

                        <p className={this.state.formValidationTextClass}>{this.state.formValidationText}</p>
                    </div>

                </div>

            </form>
        )
    }
}

export default RecoveryForm;