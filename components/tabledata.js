"use client";
import * as React from 'react';
import { DataGrid, GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'Upload date', headerName: 'Upload Date', width: 140 },
  { field: 'computer', headerName: 'System', width: 130 },
  { field: 'os', headerName: 'OS', width: 180 },
  { field: 'sha1', headerName: 'SHA1', width: 140 },
];
const csvOptions = { delimiter: ',' , fileName: 'Collections'};

function CustomExportButton(props) {
  return (
    <GridToolbarExportContainer {...props}>
      <GridCsvExportMenuItem options={csvOptions} />
    </GridToolbarExportContainer>
  );
}
function CustomToolbar(props) {
  return (
    <GridToolbarContainer {...props}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <CustomExportButton />
    </GridToolbarContainer>
  );
}
export default function TableData() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/search?functionName=collections");
        const result = await response.json();
        setData(result);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
       return (
    // <div style={{ height: 'calc(100vh-150px)', width: '60%' }}>
    <div style={{ height: '400px', width: '60%' }}>

      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.sha1} 
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          columnMenu: { background: 'red' },
        }}
        filename="custom_filename.csv"
        pageSizeOptions={[5, 10]}
        onRowClick={(params) => {setSelectedRow(params.row)}}
        sx={{
          boxShadow: 2,
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },'& .super-app-theme--header': {
            backgroundColor: 'rgba(255, 7, 0, 0.55)',
          },
          '& 	.MuiDataGrid-toolbarContainer':{
            right: '0%',
            bottom: '100%',
            // float:'',
            position: 'absolute',
          },
        }}  
      />
          {selectedRow && (
            <div>
              <h2>Selected Row</h2>
              <p>Name: {selectedRow.computer}</p>
              <p>Age: {selectedRow.os}</p>
              <p>Email: {selectedRow.sha1}</p>
            </div>
          )}
    </div>


          
  );
}