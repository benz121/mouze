"use client";
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Image from 'next/image';
import { winlogos } from "./logos";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const renderValue = (value) => {
  if (Array.isArray(value)) {
    const keys = Object.keys(value[0]);

    return (
      <table className="w-full bg-white shadow-md rounded-lg border  border-gray-100">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-xs">
            {keys.map((key) => (
              <th key={key} className="py-2 px-3 font-semibold text-left" >{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {value.map((user, index) => (
            <tr key={index} className="bg-white border-b">
              {Object.entries(user).map(([key, val]) => (
                <td key={key} className="py-2 px-3 text-xs text-left overflow-hidden whitespace-nowrap text-overflow-ellipsis">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    );
  } else {
    const infoData = Object.entries(value).reduce((acc, [key, value]) => {
      if (!Array.isArray(value)) {
        acc.push({ key, value });
      }
      return acc;
    }, []);
    return (<table>
      <tbody>
        {infoData.map(({ key, value }) => (
          <tr key={key} className='font-sans'>
            <td className='w-2/6'><span className="text-sm font-bold opacity-60">{key}</span></td>
            <td className='w-4/6'><span className="text-xs break-words opacity-80">{value}</span></td>
          </tr>
        ))}
      </tbody>
    </table>);
  }
};


const ipcols = [
  { field: 'sid', headerName: 'SID', width: 170 },
  { field: 'name', headerName: 'UserName', width: 130 },
]

export default function SystemInfo({data}) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const selectedRow = data;
  if (selectedRow != null) {
    const { Uploaddate, info: { os } } = selectedRow;
    // console.log('system'+selectedRow,os);
    var created_date = new Date(Uploaddate);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = created_date.getFullYear();
    var month = months[created_date.getMonth()];
    var date = created_date.getDate();
    var hour = created_date.getHours();
    var min = created_date.getMinutes();
    var sec = created_date.getSeconds();
    var time = date + ',' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;    // final date with time, you can use this according your requirement
    // console.log(time);
  }


  const getLogo = (prodname) => {
    const value = prodname.toLowerCase();
    // console.log("os",prodname,value);
    switch (true) {
      case value.includes("windows 11"):
        const win11 = winlogos.Windows_11[48].toString();
        return win11;
      case value.includes("windows 10"):
        const win10 = winlogos.Windows_10[48].toString();
        return win10;
      case value.includes("windows 7"):
        const win7 = winlogos.Windows_7[48].toString();
        return win7;
      case value.includes("server"):
        const serv = winlogos.Windows_Server[64].toString();
        // console.log(serv)
        return serv;
      case value.includes("windows xp"):
        const xp = winlogos.Windows_xp_vista[48].toString();
        return xp;
      default:
      case value.includes("windows 7"):
        const def = winlogos.Windows_7[48].toString();
        return def;
    }
  };

  return (
    <>
      {selectedRow && (
        <Box sx={{ width: '100%' }}>
          <div className='flex justify-around bg-white border-0 sticky top-0 z-10'>
            <div className="col p-4">
              <div className="row">
                <span className="font-semibold text-md">{selectedRow.name}</span>
              </div>
              <div className="row">
                <div className="col text-xs text-gray-400">
                  <span className="mr-2">{time}</span>
                  <span>size: {selectedRow.size}</span>
                </div>
              </div>
            </div>
            <Tooltip title={selectedRow.info.os}
              placement="left"
              arrow
              className='hover:bg-transparent'
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <Button>
                <Image
                  className="p-2"
                  alt={selectedRow.info.os}
                  width={64}
                  height={64}
                  src={getLogo(selectedRow.info.os)}
                />
              </Button>
            </Tooltip>
          </div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='bg-white sticky top-[72px] z-10'>
            <Tabs value={value} onChange={handleChange} aria-label="Tabs" centered>
              <Tab label="System Info" {...a11yProps(0)} />
              <Tab label="Compromised Activity" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} className='h-[calc(100vh-280px)] border-0 border-red-500 hover:z-40 overflow-y-hidden hover:overflow-y-auto'>
            <div>
              {renderValue(selectedRow.info)}
              <br />
              <span className='text-lg font-semibold opacity-70'>Network Information</span> 
              <div className="w-full max-w-md mx-auto my-4 overflow-x-hidden hover:z-40 hover:overflow-x-auto">
                {renderValue(selectedRow.info.ip)}
              </div>
              <br />
              <span className='text-lg font-semibold opacity-70'>Users</span> 
              <div className="w-full max-w-md mx-auto my-4 overflow-x-hidden hover:z-40 hover:overflow-x-auto">
                {renderValue(selectedRow.info.users)}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      )}
    </>
  );
}