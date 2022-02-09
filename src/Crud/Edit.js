import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from "@material-ui/icons/Edit";
import { useState,useEffect } from 'react';
import axios from 'axios';
const Edit =() =>{
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
        axios
        .get("http://localhost:3001/users")
        .then((response) => {
          setData(response.data);
        })
    }
    function dataUpdate() {
        axios.put('http://localhost:3001/users', {
            id: id,
            username: username,
            email: email
          })
            .then((response) => {
              console.log("resp is", response)
              getData(response.data);
            })
         setOpen(false);
         
    }
 
    return (
        <>
        <div>
        <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={handleOpen}>Edit</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit the Data</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="id"
                            label="UserId"
                            fullWidth
                            variant="standard"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            fullWidth
                            variant="standard"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="mail"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={dataUpdate}>Update</Button>
                    </DialogActions>
                </Dialog>
            </div>
            </>
       )
    }
export default Edit;