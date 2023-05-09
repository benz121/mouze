"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';

export default function ClientSpace() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/search?functionName=clients");
        const result = await response.json();
        const namesList = result.map(item => item.Name);
        // console.log(namesList);
        setData(namesList);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState(data[0]);
  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        disablePortal
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={data}
        sx={{ width: 300 }}
        
        renderInput={(params) => <TextField {...params} size="small" label="Clients" />}
      />
    </div>
  );
}
