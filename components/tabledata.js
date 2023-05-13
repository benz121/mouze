"use client";
import React, { useContext } from 'react';
import {
  DataGrid, GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem, GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { useEffect, useState, useRef  } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { DataContext } from './DataContext';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelIcon from '@mui/icons-material/Cancel';
const columns = [
  { field: 'Uploaddate', headerName: 'Upload Date', width: 140,
  valueGetter: (params) => {
    const dateObj = new Date(params.value);
    const formattedDate = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
    return formattedDate;
  },
},
  { field: 'name', headerName: 'Collection', width: 130 },
  { field: 'size', headerName: 'Size', width: 80 },
  { field: 'sha1', headerName: 'SHA1', width: 140 },
];
const csvOptions = { delimiter: ',', fileName: 'Collections' };

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
  const [loading, setLoading] = useState(true);
  const [firstRow, setFirstRow] = useState(null);
  const [resultrows, setResultRows] = useState([]);
  const { data, setSharedData } = useContext(DataContext);
   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/search?functionName=collections");
        const result = await response.json();
        setResultRows(result);
        setLoading(false);
        setFirstRow(result[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  
  if (loading === false){
    if (selectedRow != null){
      setSharedData(selectedRow);
    } else {
      setSharedData(firstRow);
    }}


  const getColor = (value) => {
    switch (value) {
      case 'success':
        return 'success';
      case 'inprogress':
        return 'warning';
      case 'notstarted':
        return 'primary';
       case 'failed':
          return 'error';
          
      default:
        return 'default';
    }
  };
  return (
    // <div style={{ height: 'calc(100vh-150px)', width: '60%' }}>
    <div style={{ height: '400px', width: '60%' }} className='mt-6'>

      <DataGrid
        rows={resultrows}
        columns={columns}
        getRowId={(row) => row.sha1}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        loading={loading}
        slots={{ toolbar: CustomToolbar }}
        fileName="Collections.csv"
        pageSizeOptions={[5, 10]}
        onRowClick={(params) => { setSelectedRow(params.row) }}
        sx={{
          // boxShadow: 2,
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          }, '& .super-app-theme--header': {
            backgroundColor: 'rgba(255, 7, 0, 0.55)',
          },
          '& 	.MuiDataGrid-toolbarContainer': {
            right: '0%',
            bottom: '100%',
            position: 'absolute',
          },
        }}
      />

      <div className='border-0 border-blue-700 mt-2'>
        {data && (
          <TableContainer className='border border-gray-200 rounded'>
            <Table size="small" aria-label="simple table">
                <TableHead>
          <TableRow className='font-extrabold'>
          {Object.entries(data.status).map(([key, value]) => (
            <TableCell key={key} align="center">{key}</TableCell>
            ))}

          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
          {Object.entries(data.status).map(([key, value]) => (
              <TableCell key={key} align='center'>
                <Chip variant="filled" 
                label={value}
                 size='small'  
                // icon={<CheckCircleTwoToneIcon />}
                 color={getColor(value)}
                  />
                </TableCell>
                ))}
            </TableRow>
        </TableBody>
                </Table>
          </TableContainer>

        )}
      </div>
    </div>



  );
}