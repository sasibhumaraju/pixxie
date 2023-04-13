import mainScreenImage from './../assets/mainScreenImage.jpg';
import logo from './../assets/logo.png';


function Signup(){
    return(
    <div>
        <div className="signUp">
            <div className="form">
            <div>
                  <img id='logoImg' src={logo} alt='logo'/>
            </div>
                <form>
                    <label className="labelClass">Username
                    <input id='userName' name="username" type="text" placeholder='Spiderman'/>
                    </label>
                    <label className="labelClass">Email
                    <input id='email' name="email" type="text" placeholder='spidy@web.com'/>
                    </label>
                    <label className="labelClass">Password
                    <input id='password' name="password" type="password" placeholder='••••••••••••••••'/>
                    </label>
                    <button className='signUpButton' type='submit'>Sign Up</button>
                </form>
                    <div className='orText'><hr/><h3>or</h3><hr/></div>
                <div><p id='existingAccount'>Already have an account? <span className='loginHighlight'>Login</span></p></div>
                <button className='googleButton' type='submit'>Sign Up with Google</button>
            </div>
            <div className="formImage">
                <img src={mainScreenImage} alt="Social Media"/>
            </div>
        </div>
        </div>
    );
}

export default Signup;