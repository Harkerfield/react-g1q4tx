import React from 'react';
import Box from '@mui/material/Box'

import ListDisplay from '../components/list/ListDisplay.js';
import threats from '../components/rest/threats.json';

import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import GlobalState from '../global/GlobalState.js';

export default function ThreatsList() {

    //This will be the global variable
  // Define as many global variables as your app needs, and hooks
  // to set the state of the variable.
  const [selectedThreats, setselectedThreats] = useState([]);
  // const [setting2value, setSetting2value] = useState(false);

  // For each global variable, define a function for updating it.
  // In the case of settingSelectedThreats, we’ll just use setsettingSelectedThreats.

  // If we want to toggle setting2value, we can create a function to do so...

  const selectedSettings = {
    selectedThreatsName: selectedThreats,
    // setting2name: setting2value,
    setselectedThreats,
    // toggleSetting2,
  };

  // useEffect(() => {
  //   // toggleSetting2("test");
  //   setselectedThreats('test123');
  // }, []); // <-- empty dependency array
  
  
//This will be the global variable

//console.log(selectedSettings)



  const columns = [
    // { field: 'ID', headerName: 'ID'},
    { field: 'Equip_x002f_Threat', headerName: 'Equip Threat', width: 130 },
    { field: 'System_x0020_Type', headerName: 'System_x0020_Type', width: 130 },
    { field: 'ETIC', headerName: 'ETIC', width: 130 },
    { field: 'Operational', headerName: 'Operational', width: 130 },
    { field: 'Schedulable', headerName: 'Schedulable', width: 130 },
    { field: 'Status', headerName: 'Status', width: 130 },

    { field: 'Title', headerName: 'location', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  //console.log(selectedThreats, "mycontext")

  const threatsList = threats['0']['d']['results'];

  return (
    <Box>
      
      <GlobalState.Provider value={selectedSettings}>
      <ListDisplay
        jsonData={threatsList}
        columnData={columns}
        multiSelect={false}
      />

      <pre style={{ fontSize: 10 }}>
  {JSON.stringify(selectedThreats, null, 4)}
</pre>

</GlobalState.Provider>
    </Box>
  );
}
