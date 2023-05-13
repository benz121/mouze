"use client";
import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Status() {
  const { data } = useContext(DataContext);
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
    <div className='w-2/5 border-0 border-blue-700 mt-2'>
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
            <Chip label={value} color={getColor(value)} />
            </TableCell>
            ))}
        </TableRow>
    </TableBody>
            </Table>
      </TableContainer>

    )}
  </div>
  )
}
