import {useEffect,useState} from 'react';

// change theme hook
function useChangeTheme () {

    //  intial theme
    const currenttheme = localStorage.getItem("theme")
    const intialTheme = ( currenttheme == null )? "light-theme" : currenttheme
    const [theme,setTheme] = useState(intialTheme);

    // change current theme state
    const changeThemeColor = () => {
        if (theme === 'light-theme') {
          localStorage.setItem("theme","dark-theme")
          setTheme('dark-theme');
          return;
        }

        localStorage.setItem("theme","light-theme")
        setTheme('light-theme');
       
      }
    
    //   change app theme color
     useEffect( () => {   document.body.className = theme; }, [theme] );

     return [changeThemeColor]

}

export default useChangeTheme;