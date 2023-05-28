"use client";
import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import {
    DataGrid, GridToolbarContainer,
    GridToolbarExportContainer,
    GridCsvExportMenuItem, GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector
} from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelIcon from '@mui/icons-material/Cancel';
import SystemInfo from '../../components/systeminfo';
import SystemInfoLoading from '../hash/page';
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
const columns = [
    {
        field: 'Uploaddate', headerName: 'Upload Date', width: 140,
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

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null); // Add selectedRow state
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/search?functionName=collections');
                const data = await response.json();
                setData(data);
                setLoading(false);
                setSelectedRow(data[0]); // Set the first row as the selected row initially

            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    // const handleRowClick = (params) => {
    //   setSelectedRow(params.row); // Update selectedRow state with clicked row data
    // };
    const firstRow = data.length > 0 ? data[0] : null;

    const detailsRow = selectedRow || firstRow;
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
        <div style={{ display: 'flex'}}>
        {/* datagrid */}
        <div className='p-2 w-3/5'>

            <div className='mt-6 mb-2'>
            {loading ? (
                // Show skeleton loading effect while data is being fetched
                <Skeleton variant="rectangular" height={400} animation="wave" />
            ) : (
                // Render DataGrid table with fetched data
                <DataGrid
                rows={data}
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
                    '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                    },
                    '& .super-app-theme--header': {
                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    },
                    '&  .MuiDataGrid-toolbarContainer': {
                    right: '0%',
                    bottom: '100%',
                    position: 'absolute',
                    },
                }}
                />
            )}
            </div>
      
            {/* status */}
            <div className='status'>
            {loading ? (
                <Skeleton variant="text" animation="wave" />
            ) : (
                <div className='border-0 border-blue-700 mt-4'>
                {detailsRow && (
                    <TableContainer className='border border-gray-200 rounded'>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                        <TableRow className='font-extrabold'>
                            {Object.entries(detailsRow.status).map(([key, value]) => (
                            <TableCell key={key} align="center">{key}</TableCell>
                            ))}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                            {Object.entries(detailsRow.status).map(([key, value]) => (
                            <TableCell key={key} align='center'>
                                <Chip
                                variant="filled"
                                label={value}
                                size='small'
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
            )}
            </div>
        </div>
      
        {/* details */}
        <div className="flex-1 p-2 h-[calc(100vh-150px)] w-2/5 ">
          {loading ? (
            // <SystemInfoLoading />
            <Skeleton variant="rectangular" height={100} animation="wave" />

          ) : (
            <div className="border rounded-md border-gray-200">
              {detailsRow ? (
                <SystemInfo data={detailsRow} />
              ) : (
                <div className='flex items-center justify-center h-full'>
                  <span className='text-gray-500'>No row selected</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      
    );
}
