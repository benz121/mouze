"use client";
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const setSharedData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
};