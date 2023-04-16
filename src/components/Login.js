import React from 'react';
import UseInputState from '../hooks/UseInputState';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

function Login (props) {
    const [email, setEmail, resetEmail] = UseInputState("");
    const [password, setPassword, resetPassword] = UseInputState("");
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then( (userCredentials) => {
            console.log(userCredentials);
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    return (
        <div className='login'>
            <div className='login-card'>
            <div className='logo-auth'>Pixxie 🎃</div>    
            <div className='heading'>  Login </div>
            <form onSubmit={signIn} >
                <input type='text'  placeholder='👨‍🔬  email or username' value={email} onChange={setEmail}></input> 
                <input type='password' placeholder='🔑  password' value={password} onChange={setPassword}></input>
                <button type='submit' className='submit' >Login</button>
            </form>
            <div className='forgot-passowrd-button'> Forgot Password? </div>
            <div className='new-account'> Don't have an account? <span onClick={props.handleChange} style={{color:"#2a85ff", cursor:"pointer"}}>Sign up</span>  </div>
            </div>
        </div>

    );
}

export default Login;