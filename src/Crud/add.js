import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () =>{
const [open, setOpen] = React.useState(false);
const [id,setID]= useState();
const [userName, setUserName] = useState();
const [email, setEmail] = useState();
const navigate = useNavigate;
const sendDataToAPI = () => {
axios.post(`http://localhost:3001/students`, {
id,
userName,
email
}).then(() => {
navigate.push('/read')
})
}
const handleClickOpen = () => {
setOpen(true);
};
const handleClose = () => {
setOpen(false);
setID('');
setUserName('');
setEmail('');
};
return (
<>
<div>
<Button variant="outlined" onClick={handleClickOpen}>
Create 
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogTitle>Enter Your Detail's</DialogTitle>
<DialogContent>
<TextField
autoFocus
margin="dense"
id="id"
label="Id"
type="Id"
fullWidth
variant="standard"
onChange={(e) => setID(e.target.value)}
/>
<TextField
autoFocus
margin="dense"
id="userName"
label="UserName"
type="userName"
fullWidth
variant="standard"
onChange={(e) => setUserName(e.target.value)}
/>
<TextField
autoFocus
margin="dense"
id="name"
label="Email Address"
type="email"
fullWidth
variant="standard"
onChange={(e) => setEmail(e.target.value)}
/>
</DialogContent>
<DialogActions>
<Button onClick={handleClose}>Cancel</Button>
<Button onClick={sendDataToAPI}>Save</Button>
</DialogActions>
</Dialog>
</div>
</>
)
}
export default Add;
