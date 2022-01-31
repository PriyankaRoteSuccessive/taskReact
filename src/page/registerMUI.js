import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import App from '../App.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import ThemeContext from "../context/ThemeContext"
import ThemeSwitcher from "../component/ThemeSwitcher";
import { useContext } from "react";
const RegisterMUI = () => { 
  // const themes =useContext(ThemeContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
  const Users={
      Name : name,
      Email : email,
      Password : pwd
    }
  let Data = localStorage.getItem("Register Users Detail")
  if (Data == null){
     Data = [];
     Data.push(Users);
    localStorage.setItem(" Register user details",JSON.stringify(Data))
    navigate('/loginMUI',{state : " "})
  } 
  else{
    let NewData = JSON.parse(Data)
    NewData.push(Users)
    localStorage.setItem("Register users details",JSON.stringify(NewData))
    navigate('/loginMUI',{state : " "})
  }
}
  const redirectHandler =() => {
    navigate('/loginMUI',{state: {}})
  }
  return (
    <>
    <div className='regStyle'  >
    
    <Box
      sx={{       
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}>
      <TextField
        helperText="Please enter your name"
        id="name"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br></br>
       <TextField
        helperText="Please enter your email"
        id="email"
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br></br>
       <TextField
        helperText="Please enter your password"
        id="pwd"
        label="Password"
        type="password"
        placeholder="Password"
        value={pwd}
        onChange={e => setPwd(e.target.value)}
      />
      <br></br>  
   <Button variant="contained" onClick={handleSubmit}>Register</Button>
   <h3>OR</h3>
   <Button variant="contained" onClick={redirectHandler}>Login</Button>
  </Box>
  <ThemeSwitcher/>
  </div>
    </>
  );
}
export default RegisterMUI;