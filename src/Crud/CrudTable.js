import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Header } from '../module';
import Validation from "./validation";

const CrudTable =()=>{
// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const [id,setId]=useState("");
const [username,setName]=useState("");
const [email,setEmail]=useState("");
const [data,setData]=React.useState([])
const [open, setOpen] = useState(false);
const [opendata,setOpenData] = useState(false);
let nameRegEx = /^[A-Za-z]+$/
let emailRegEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
// const [state, setState] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };
// const handleSubmit = (event) => {
//     if((state.username == "") || (state.email == ""))
//     {
//       alert("Please Fill All Required Fields");
//       event.preventDefault();
//     }    
//     else 
//     if (!state.email.length) {
//       alert('Please Enter Valid Email');
//       event.preventDefault();
//     } 
//     else if (!emailRegex.test(state.email)) {
//       alert('Please Enter Valid Email');
//       event.preventDefault();
//     }
//    else{
//     event.preventDefault();
//     console.log(state);
//     console.log(`Name: `+ state.username +`, Email: ` + state.email );
//     alert(`Successfully Form Submit. Your Name: `+ state.username +`, Email: `+ state.email +``);
//    }
//   };
// const handleInputChange = (event) => {
//     setState((prevProps) => ({
//       ...prevProps,
//       [event.target.username]: event.target.value
//     }));
//   };
const handleOpen = () => {
    setOpen(true);
    
};
const handleOpenData = () =>{
    setOpenData(true);
}
const handleClose = () => {
    setOpen(false);
    setId('');
   setName('');
   setEmail('');
};
const handleClosed = () => {
    setOpen(false);
};
useEffect(() => {
    getData();
},
[]);
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
 

function getData() {
    axios
    .get("http://localhost:3001/users")
    .then((response) => {
      setData(response.data);
    })
}
function addData() {
    let x = { username, email }
    let nameCheck = nameRegEx.test(x.username)
        let emailCheck = emailRegEx.test(x.email)

        if (nameCheck && emailCheck) {
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
 }
 function editData(userid) {
    setOpen(true);
    const item = data[userid - 1];
    setId(item.id);
    setName(item.username)
    setEmail(item.email)
    
}
 function update() {
    axios.put(`http://localhost:3001/users/${id}`,
         {
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

function deleteUser(id) {
    axios.delete(`http://localhost:3001/users/${id}`)
    .then((response) => {
      getData(response.data);
    })
}

// const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {t="standard"  
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     return errors;
//   };

  return (
      <>
       {/* <form onSubmit={handleSubmit}> */}
      <Header/>
    {/* ADD Button */}
    <Button variant="outlined" onClick={handleOpenData}>Add User</Button>
    <Dialog open={opendata} onClose={handleClosed}>
    <DialogTitle>Enter Detail's</DialogTitle>
    <DialogContent>
    <TextField autoFocus margin="dense" id="id" label="Id" type="Id" fullWidth variant="standard" value={id}
     onChange={(e) => setId(e.target.value)}/>
    <TextField autoFocus margin="dense" id="userName" label="UserName" type="userName" fullWidth variant="standard"  value={username}
    onChange={(e) => setName(e.target.value)}         />
    {/* //   onChange={handleInputChange} */}
      {/* <p>{formErrors.username}</p> */}
    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard"  value={email}
     onChange={(e) => setEmail(e.target.value)} />
    {/* //  onChange={(e) => setEmail(e.target.value)} onChange={handleInputChange} */}
     {/* <p>{formErrors.email}</p> */}
    </DialogContent>
    <DialogActions>
     <Button onClick={handleClose}>Cancel</Button>
     <Button  onClick={addData}>Add Data</Button>
    </DialogActions>
    </Dialog>
{/* Edit */}

    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Edit User</DialogTitle>
    <DialogContent>
    <TextField autoFocus margin="dense" id="id" label="Id" type="Id" fullWidth variant="standard" value={id}
     onChange={(e) => setId(e.target.value)}/>
    <TextField autoFocus margin="dense" id="userName" label="UserName" type="userName" fullWidth variant="standard" value={username}
     onChange={(e) => setName(e.target.value)}/>
      {/* <p>{formErrors.username}</p> */}
    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" value={email}
     onChange={(e) => setEmail(e.target.value)}/>
      {/* <p>{formErrors.email}</p> */}
    </DialogContent>
    <DialogActions>
     <Button onClick={handleClose}>Cancel</Button>
    <Button type="submit" onClick={update}>Update</Button>
    </DialogActions>
    </Dialog>
{/* Table  */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">
                <Button  variant="contained" style={{marginRight:10}} onClick={() => editData(row.id)} >Edit</Button>
                <Button  variant="contained" onClick={() => deleteUser(row.id)}>Delete</Button> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* </form> */}
    </>
  );
}
export default CrudTable;