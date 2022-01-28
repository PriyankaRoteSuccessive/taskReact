import { useContext } from "react"
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import ThemeContext from "../context/ThemeContext"
import ThemeSwitcher from "../component/ThemeSwitcher";
 const Welcome=()=>
{
    const location = useLocation();
    let Data = location.state;
    const removeToken=()=>{
        localStorage.removeItem("userToken")
    }
    const themes = useContext(ThemeContext);
    return(
    <>
        <h1>Welcome {Data.users.mail}</h1>
        <Button onClick={removeToken}>Logout</Button> 
    </>)
}
export default Welcome;