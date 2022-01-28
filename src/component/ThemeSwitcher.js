import React, {useContext} from "react"
import Button from '@mui/material/Button';
import  ThemeContext,{themes} from "../context/ThemeContext";
const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
      <Button
        onClick={() => {
            theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
            console.log("change theme ",theme)
        }}
      > Change Theme
      </Button>
    )
  }
  
  export default ThemeSwitcher