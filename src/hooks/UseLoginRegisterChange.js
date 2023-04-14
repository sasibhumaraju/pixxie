import { useEffect, useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";

function UseLoginRegisterChange(){
    const[value,setValue] = useState(true);
    const changeValue = () => {
        console.log(value);
            setValue(!value);
    }
    return [value,changeValue];
}

export default UseLoginRegisterChange;