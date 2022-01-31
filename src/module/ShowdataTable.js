import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { useState, useRef } from 'react';
import { Created } from '.';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowdataTable = () => {
  const [id,setID]= useState();
const [userName, setUserName] = useState();
const [email, setEmail] = useState();
  const navigate = useNavigate;
  const sendDataToAPI = () => {
    axios.put(`http://localhost:3001/users${id}`, {
      userName,
      email,
    }).then(() => {
        navigate.push('/read')
    })
  }
  
  
  const setData = (data) => {
    console.log(data);
  }
    const [tabledate,setTabledata]= useState([])
    useEffect (() => {
 fetch('http://localhost:3001/users')
   .then((data) =>data.json())
 .then((data) => setTabledata(data))
}, [])
console.log(tabledate)


const columns = [
  { field: 'id', headerName: 'ID', width: 180 ,height:200},
  { field: 'userName', headerName: 'Name',width: 180 },
  { field: 'email',headerName: 'Email',width: 180},
  { field: 'Action', headerName: 'Action', width: 400,
renderCell: () => {
         return (
           <>
            <Button variant="contained" color="primary" onClick={sendDataToAPI} startIcon={<EditIcon />}>
             Edit
          </Button>

          &nbsp; &nbsp; &nbsp; &nbsp;
          <Button variant="contained" color="primary" startIcon={<EditIcon />}>
             Delete
          </Button>
         
          </>
         );
       }
}
];
 
return(
<>
<h1>hello</h1>
<Created/>
<div style={{ height: 300, width: '80%', margin: "50px" }}>
      <DataGrid
        rows={tabledate}
        columns={columns}
        pageSize={4}
      /> 
     </div>  
</>
)
}

export default ShowdataTable;