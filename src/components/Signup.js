import UseInputState from "../hooks/UseInputState";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Signup(props){
    const [email,setEmail,resetEmail] = UseInputState("");
    const [userName,setUserName,resetUserName] = UseInputState("");
    const [password,setPassword,resetPassword] = UseInputState("");
    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then( (userCredentials) => {
            console.log(userCredentials);
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    return(
    <div>
        <div className="signUp">
            <h2 className="registerText">Sign Up</h2>
            <div className="form">
                <form onSubmit={signUp}>
                    <label className="labelClass">Username
                    <input id='userName' name="username" type="text" placeholder='Spiderman' value={userName} onChange={setUserName}/>
                    </label>
                    <label className="labelClass">Email
                    <input id='email' name="email" type="text" placeholder='spidy@web.com' value={email} onChange={setEmail}/>
                    </label>
                    <label className="labelClass">Password
                    <input id='password' name="password" type="password" placeholder='••••••••••••••••' value={password} onChange={setPassword}/>
                    </label>
                    <button className='signUpButton' type='submit'>Sign Up</button>
                </form>
                <h4 className="forgotPassword">Forgot Password?</h4>
                </div>
                <div className='orText'><h3>or</h3></div>
                <div className='existingAccount'>Already have an account? <span className='loginHighlight' onClick={props.handleChange}>Login</span></div>
        </div>
        </div>
    );
}

export default Signup;