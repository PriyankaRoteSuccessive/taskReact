import {useState} from "react";
import {useNavigate} from "react-router-dom";
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
    const handleChange =(e) =>{
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
             <InputField type="text" id="name" placeholder="Enter Username" onChange={handleChange}/>  
             <Mylabel>Email</Mylabel>
             <InputField type="email" id="email" placeholder="Enter email" onChange={handleChange}  />
             <Mylabel>Password</Mylabel> 
             <InputField type="password" id="password" placeholder="Enter Password" onChange={handleChange}  />  
             <button onClick={redirectHandler}> Submit</button>
         </div>
        </>
    )
}
export default Login;