import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useState } from 'react';
import Created from './Created';
import Edit from './Edit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
const ShowTableData = () => {
    const [open, setOpen] = useState(false);
    const [opendata, setOpenData] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [tabledate, setTabledata] = useState([])

    // const handleOpen = () => {
    //     setOpenData(true);
    //     setId();
    //     setUserName();
    //     setEmail();
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const handleClosed = () => {
    //     setOpenData(false);
    // };
    // useEffect(() => {
    //     getData();
        
    // })
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 180, height: 200 },
        { field: 'username', headerName: 'Name', width: 180 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'Action', headerName: 'Action', width: 400,
            renderCell: () => {
                return (
                    <>
                        {/* <Button variant="contained" color="primary"  startIcon={<EditIcon />}>Edit</Button> */}
                        <Edit />
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}> Delete </Button>
                    </>
                );
            }
        }
    ];

    return (
        <>
            <h1>User Information</h1>
            <Created />
            <div style={{ height: 300, width: '80%', margin: "50px" }}>
                <DataGrid rows={setData} columns={columns} pageSize={3} />
            </div>
        </>
    )
}

export default ShowTableData;