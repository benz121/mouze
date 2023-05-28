"use client";
import  { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Add selectedRow state

  const fetchData = async () => {
    try {
      const response = await fetch('/api/search?functionName=collections');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const setSelectedRowData = (row) => {
    setSelectedRow(row);
  };

  return (
    <DataContext.Provider value={{ data, fetchData, selectedRow, setSelectedRow: setSelectedRowData }}>
      {children}
    </DataContext.Provider>
  );
};
