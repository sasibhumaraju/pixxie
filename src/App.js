import React,{useEffect,useState} from 'react';
import useChangeTheme from './hooks/ChangeTheme';
import './App.css';
import Signup from './components/Signup';


function App() {

  const [changeThemeColor] = useChangeTheme('light-theme');
  
  return (
    <div className='App'>
      <Signup/>
   </div>
  );
}

export default App;
