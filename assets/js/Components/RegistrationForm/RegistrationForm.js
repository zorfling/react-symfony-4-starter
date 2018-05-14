import React from 'react'
import ReactSignupLoginComponent from 'react-signup-login-component';
import './registrationForm.css'
 
const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
     
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <ReactSignupLoginComponent
                        title="Log in or sign up"
                        handleSignup={signupWasClickedCallback}
                        handleLogin={loginWasClickedCallback}
                        handleRecoverPassword={recoverPasswordWasClickedCallback}
                    />
                </div>
            </div>
        </div>
    );
};
 
export default LoginPage;