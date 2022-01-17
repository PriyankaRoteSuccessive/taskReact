import {useState} from "react"
import {useNavigate} from "react-router-dom"
import  Data  from "./data";
import { InputField,Mylabel } from "../component/style";
import { Header } from "../module";
const Login =()=>{
    const [users,setUsers] =useState(
        {
            name: "",
            email:"",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const HandleChange =() =>{
      setUsers({
            ...users,
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            Password:document.getElementById("password").value,
        })
    }
    let data = users;
    const redirectHandler =() =>{
        navigate('/data',{state: {users}})
    }
    return(
        <>
        <Header/>
             <div>
             <Mylabel>Name</Mylabel>
             <InputField type="text" id="name" placeholder="Enter Username" onChange={HandleChange}/>  
             <Mylabel>email</Mylabel>
             <InputField type="email" id="email" placeholder="Enter email" onChange={HandleChange}  />
             <Mylabel>Password</Mylabel> 
             <InputField type="password" id="password" placeholder="Enter Password" onChange={HandleChange}  />  
             <button onClick={redirectHandler}> Submit</button>
         </div>
        </>
    )
}
export default Login;