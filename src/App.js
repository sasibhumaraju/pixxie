import React,{useEffect,useState} from 'react';
import useChangeTheme from './hooks/ChangeTheme';
import Login from './components/Login';
import Auth from './components/Auth';
import './App.css';
import Signup from './components/Signup';


function App() {

  const [changeThemeColor] = useChangeTheme();
  
  return (
    <>
   {/* <h1 >Pixxie hi</h1> */}
   {/* <button onClick={changeThemeColor}> Switch Theme</button> */}
   <Auth></Auth>
   </>
  );
}

export default App;
