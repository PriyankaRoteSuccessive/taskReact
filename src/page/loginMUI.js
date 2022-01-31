import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import App from '../App.css'
import {useNavigate} from "react-router-dom"
import { useState,useEffect} from 'react';
import ThemeContext from "../context/ThemeContext"
import ThemeSwitcher from "../component/ThemeSwitcher";
import { useContext } from "react";
  const LoginMUI = () =>{ 
    // const themes =useContext(ThemeContext)
  // const [mail, setEmail] = useState('');
  // const [pwd, setPwd] = useState('');
  const [users,setUsers] =useState(
    {
        mail:"",
        Password:"",
    }
  )
  const [formValues, setFormValues] = useState(users);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange =(e) =>{
    // setUsers({
    //   ...users,
    //  mail:document.getElementById("mail").value
      const{ name, value } = e.target;
      setFormValues({...formValues, [name]: value })
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };
  let data = users;
  let navigate = useNavigate();
  const redirectHandler =() =>{
    const token = localStorage.setItem("token","userdata");
    navigate('/welcome',{state: {users}})
    console.log("hiii",navigate)
  }
  
  return (
    <>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
    <div className='regStyle' onSubmit={handleSubmit} >
    {/* style={themes.theme} */}
    
    <Box
      sx={{
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
     <h1>Welcome !</h1>
     <h3>Sign in to your Account</h3>
       <TextField
         helperText="Please enter your email"
        //  value ={mail}
        // onChange={(e) => setEmail(e.target.value)}
        id="mail"
        label="Email"
        // value={formValues.mail}
        //       onChange={handleChange}
      />
      <p>{formErrors.email}</p>
      <br></br>
       <TextField
        helperText="Please enter your password"
        id="Password"
        label="Password"
        type="password"
        placeholder='password'
        // value={pwd}
        // onChange={(e) => setPwd(e.target.value)}
        value={formValues.pwd}
        onChange={handleChange}
      />
       <p>{formErrors.password}</p>
      <br></br>  
   <Button variant="contained"onClick={redirectHandler}>Submit </Button>
   <h4>OR</h4>
   <Button variant="contained"onClick={redirectHandler}>Register</Button>
    </Box>
    <ThemeSwitcher/>
    </div>
    </>
  );
}
export default LoginMUI;