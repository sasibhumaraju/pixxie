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
    
        <div className="signup">
            <div className="signup-card">
            <div className="heading"> Sign up to Pixxie</div>
          
                <form onSubmit={signUp}>
                     <input  name="username" type="text" placeholder='username' value={userName} onChange={setUserName}/>
                     <input  name="email" type="text" placeholder='email' value={email} onChange={setEmail}/>
                     <input  name="password" type="password" placeholder='password' value={password} onChange={setPassword}/>
                     <button className='submit' type='submit'>Sign Up</button>
                </form>
                {/* <div className="forgot-passowrd-button">Forgot Password?</div> */}
                <div className='existing-account'>Already have an account?  <span onClick={props.handleChange} style={{color:"#2a85ff", cursor:"pointer"}}>Login</span></div>
        </div>
        </div>
      
    );
}

export default Signup;