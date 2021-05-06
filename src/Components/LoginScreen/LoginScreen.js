import React from 'react';
import './LoginScreen.css';
import SignInForm from '../SignInForm/SignInForm';
import RecoveryForm from '../RecoveryForm/RecoveryForm';
import RegisterForm from '../RegisterForm/RegisterForm';

class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'menu'
        };
    }

    changeRoute = (route) => {
        if (route === "authenticated") {
            this.props.loginStatus(true);
        } else {
            this.setState({route: route});
        }
    }

    render() {

        switch(this.state.route) {

            case 'menu':
                return (
                    <div className='loginScreen'>

                        <div className='flexCenter'>
                        <div className='flexCenter logoPlaceholderLogin'>Logo</div>
                        <h1 className='loginScreenTitle'>Homeschool Organizer</h1>
                        </div>
        
                        <div className='flexCenter'>
                            <button className='loginScreenBtn' onClick={ () => {this.changeRoute('login')} }>Sign In</button>
                            <button className='loginScreenBtn' onClick={ () => {this.changeRoute('register')} }>Register</button>
                        </div>
    
                   </div>
                )

            case 'login': 
              return( <SignInForm changeRoute={this.changeRoute}  /> )

            case 'recovery': 
              return( <RecoveryForm changeRoute={this.changeRoute}  /> )
        
            case 'register': 
              return( <RegisterForm changeRoute={this.changeRoute}  /> )
           
            default: return null;
        }
    }
}

export default LoginScreen;