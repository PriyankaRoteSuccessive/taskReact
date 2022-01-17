import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextareaAutosize } from '@mui/base';
import { useState, useRef } from 'react';
import { Header } from '../module';

const Modals = () =>{
  const [open, setOpen] = React.useState(false);
  const [myName, setMyName] = useState();
  const [myEmail, setMyEmail] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [pos, setPos] = useState('');
  const [myText,setText] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setMyName('');
    setMyEmail('');
    setPos('')
    setSubmitted(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    setSubmitted(true);
  };
  const handleName = (e) => {
    setMyName(e.target.value)
    console.log(" Name is", myName)
  }
  const handleEmail= (e) => {
    setMyEmail(e.target.value);
    console.log("Email is", myEmail);
    ;
  }
  const handleText =(e)=>{
    setText(e.target.value);
    console.log("Text is",myText)
  }

 
  const handleChange = (e, value) => {
  setPos(e.target.value);
  }


  return (
    <>
    <Header/>
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Click Me
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Your Detail's</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={handleName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleEmail}
          />
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Position</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={pos}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Trainee '}>Trainee</MenuItem>
          <MenuItem value={'Trainer '}>Trainer</MenuItem>
          <MenuItem value={'Expert '}>Expert</MenuItem>
        </Select>
        <br></br>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Discription"
            style={{ width: 400}}
            onChange ={handleText}
       />

      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
     </div>
      {isSubmitted &&
        <div>
          <h1>Name : {myName}</h1>
          <h1>Email : {myEmail}</h1>
          <h1>Position : {pos}</h1>
          <h1>Description : {myText}</h1>
        </div>}

    </>
  )
}
export default Modals;