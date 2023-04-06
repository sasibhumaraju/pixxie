import {useEffect,useState} from 'react';

// change theme hook
function useChangeTheme (intialTheme) {

    //  intial theme
    const [theme,setTheme] = useState(intialTheme);

    // change current theme state
    const changeThemeColor = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
          return;
        }
        setTheme('light-theme');
      }
    
    //   change app theme color
     useEffect( () => {   document.body.className = theme; }, [theme] );

     return [changeThemeColor]

}

export default useChangeTheme;