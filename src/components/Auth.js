import React from "react";
import Login from "./Login";
import LogoDark from '../assets/logo-vector-dark.png';
import MobLogoDark from '../assets/logo-text-dark.png'

function Auth () {
    return (
        <div className="auth"> 
            <div className="logo">
                <img src={LogoDark}></img>
            </div>
            <div className="mob-logo">
                <img src={MobLogoDark}></img>
            </div>
            <Login></Login>
         </div>
    );
}

export default Auth;