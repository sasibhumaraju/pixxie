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

            <div className="circles" >
                <div className="c1"></div>
                <div className="c2"></div>
                <div className="c3"></div>
                <div className="c4"></div>
                <div className="c5"></div>
                <div className="c6"></div>
            </div>

            <div className="waves">
            <div className="wave">
            <svg viewBox="0 0 500 200">
                <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#2a85ff"></path>
                <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#2a85ff" opacity="0.8"></path>
                <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#2a85ff" opacity="0.5"></path>
            </svg>
            </div> 
         </div>
         </div>
    );
}

export default Auth;