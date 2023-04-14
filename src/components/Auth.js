import React from "react";
import Login from "./Login";
import LogoDark from '../assets/logo-vector-dark.png'
import Signup from "./Signup";
import UseLoginRegisterChange from "../hooks/UseLoginRegisterChange";

function Auth () {
    const [value,changeValue] = UseLoginRegisterChange(); 
    return (
        <div className="auth"> 
            <div className="logo">
                <img src={LogoDark}></img>
            </div>
            {value ? <Login handleChange={changeValue}/> : <Signup handleChange={changeValue}/>}
         </div>
    );
}

export default Auth;