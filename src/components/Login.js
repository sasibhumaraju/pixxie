import React from 'react';
import UseInputState from '../hooks/UseInputState';

function Login () {
    const [email, setEmail, resetEmail] = UseInputState("");
    const [password, setPassword, resetPassword] = UseInputState("");

    return (
        <div className='login'>
            <div className='login-card'>
            <div className='heading'> Sign in to Pixxie </div>
            <form >
                <input type='text' placeholder='email' value={email} onChange={setEmail}></input>
                <input type='password' placeholder='password' value={password} onChange={setPassword}></input>
            </form>
            <div className='forgot-passowrd-button'> Forgot Password? </div>
            <div className='new-account'> Don't have an account? Sign up </div>
            </div>
        </div>
    );
}

export default Login;