import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';

const Created = () =>{
    const [open, setOpen] = useState(false);
    const [opendata, setOpenData] = useState(false);
    const [data, setData] = useState([]);
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

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        fetch("http://localhost:3001/users").then((result) => {
            result.json().then((response) => {
                setData(response);
            })
        })
    }
    
    const saveData = ()=> {
       
        let item = { id, username, email }

        fetch(`http://localhost:3001/users`,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)

            }).then((result) => {
                result.json().then((response) => {
                    getData(response);
                })
            })
        setOpenData(false);
    }

return (
    <>
    <div>
    <Button variant="outlined" onClick={handleOpen}>Add User</Button>
    <Dialog open={opendata} onClose={handleClose}>
    <DialogTitle>Enter Detail's</DialogTitle>
    <DialogContent>
    <TextField autoFocus margin="dense" id="id" label="Id" type="Id" fullWidth variant="standard"
    onChange={(e) => setId(e.target.value)}/>
    <TextField autoFocus margin="dense" id="userName" label="UserName" type="userName" fullWidth variant="standard"
     onChange={(e) => setUserName(e.target.value)}/>
    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard"
     onChange={(e) => setEmail(e.target.value)}/>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={saveData}>Save</Button>
    </DialogActions>
    </Dialog>
    </div>
    </>
   )
}
export default Created;