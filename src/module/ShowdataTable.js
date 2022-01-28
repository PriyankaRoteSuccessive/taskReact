import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
const columns = [
  { field: 'id', headerName: 'ID', width: 180, editable: true },
  { field: 'username', headerName: 'Name', type: 'name',width: 180, editable: true },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 180,
    editable: true,
  },
];
const ShowdataTable = () => {
    const [tabledate,setTabledata]= useState([])
    useEffect (() => {
 fetch('http://localhost:3001/users')
   .then((data) =>data.json())
 .then((data) => setTabledata(data))
}, [])
console.log(tabledate)

return(
<>
<h1>hello</h1>
<div style={{ height: 300, width: '80%', margin: "50px" }}>
      <DataGrid
        rows={tabledate}
        columns={columns}
        pageSize={3}
      />
    </div>
</>
)
}
export default ShowdataTable;