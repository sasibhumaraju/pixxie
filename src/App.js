import React,{useEffect,useState} from 'react';
import useChangeTheme from './hooks/ChangeTheme';
import Login from './components/Login';
import './App.css';


function App() {

  const [changeThemeColor] = useChangeTheme();
  
  return (
    <>
   {/* <h1 >Pixxie hi</h1> */}
   <button onClick={changeThemeColor}> Switch Theme</button>
   <Login></Login>
   </>
  );
}

export default App;
