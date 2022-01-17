import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom"
const Data = (props) =>{
    const location = useLocation();
    let myData = location.state;
    let navigator = useNavigate();
    const redirectLogin =()=>{
         navigator('/')
    }
    return(
        <>
        <h1>Name{myData.users.name} </h1>
        <h1>Email :  {myData.users.email} </h1>
        <button onClick={redirectLogin}>Logout</button>
        </>
    )
}
export default Data;