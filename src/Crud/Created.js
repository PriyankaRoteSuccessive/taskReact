import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';
import axios from "axios";

const Created = () =>{
    const [open, setOpen] = useState(false);
    const [opendata, setOpenData] = useState(false);
    const [data, setData] = useState({id:"",username:"",email:""});
    const [id, setId] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleOpen = () => {
        setOpenData(true);
        setId();
        setUserName();
        setEmail();

    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClosed = () => {
        setOpenData(false);
    };
    useEffect(() => {
        getData();
    })
    function getData() {
        axios.get("http://localhost:3001/users").then((result) => {
            result.json().then((response) => {
                setData(response.data);
                console.log("hello Data",data);
            })
        })
    }

    const saveData = async()=> {
        axios.post('http://localhost:3001/users', {
            id: id,
            username: username,
            email: email
          })
            .then((response) => {
              getData(response.data);
            })
            setOpenData(false);
    }
    function onTextFieldChange(e) {
        setData({
         ...data,
         [e.target.name]: e.target.value
        })
       }
       async function onFormSubmit(e) {
        e.preventDefault()
         await axios.post(`http://localhost:3001/users`, data)
       }

return (
    <>
    <form  onSubmit={e => onFormSubmit(e)}>
    <Button variant="outlined" onClick={handleOpen}>Add User</Button>
    <Dialog open={opendata} onClose={handleClose}>
    <DialogTitle>Enter Detail's</DialogTitle>
    <DialogContent>
    <TextField autoFocus margin="dense" id="id" label="Id" type="Id" fullWidth variant="standard"
    onChange={onTextFieldChange}/>
    <TextField autoFocus margin="dense" id="userName" label="UserName" type="userName" fullWidth variant="standard"
     onChange={onTextFieldChange}/>
    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard"
     onChange={onTextFieldChange}/>
    </DialogContent>
    <DialogActions>
     <Button onClick={handleClosed}>Cancel</Button>
    <Button type="submit" onClick={e => onFormSubmit(e)}>Save</Button>
    </DialogActions>
    </Dialog>
    </form>
    </>
   )
}
export default Created;