// import { useContext } from "react"
import { useLocation } from "react-router-dom";
// import ThemeContext from "../context/ThemeContext"
import Dashboard from "./dashboard";
 const Welcome=()=>
{
    const location = useLocation();
    let Data = location.state;
    // const removeToken=()=>{
    //     localStorage.removeItem("token")
    // }
    // const themes = useContext(ThemeContext);
    return(
    <>
        <h1>Welcome {Data.users.mail}</h1>
        {/* <Button onClick={removeToken}>Logout</Button>  */}
        <Dashboard/>
    </>)
}
export default Welcome;