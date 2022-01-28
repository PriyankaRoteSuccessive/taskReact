import React from "react";
export const themes= {
  dark:{
    color: 'yellow',
    background : '#808080'
  },
  light:{
    color: 'black',
    background: ' #E5E4E2'
  }
}
const ThemeContext = React.createContext(themes.light);
 export default ThemeContext;