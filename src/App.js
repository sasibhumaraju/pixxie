import React,{useEffect,useState} from 'react';
import useChangeTheme from './hooks/ChangeTheme';
import './App.css';


function App() {

  const [changeThemeColor] = useChangeTheme('light-theme');
  
  return (
    <>
   <h1 >Pixxie hi</h1>
   <button onClick={changeThemeColor}> Switch Theme</button>
   </>
  );
}

export default App;
