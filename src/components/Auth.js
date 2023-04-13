import React from "react";
import Login from "./Login";
import LogoDark from '../assets/logo-vector-dark.png'

function Auth () {
    return (
        <div className="auth"> 
            <div className="logo">
                <img src={LogoDark}></img>
            </div>
            <Login/>
         </div>
    );
}

export default Auth;