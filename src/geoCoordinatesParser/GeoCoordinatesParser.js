import React, { Component } from 'react';
//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import DmsCoordinates, { parseDms } from "dms-conversion";
import convert from 'geo-coordinates-parser';

//https://www.npmjs.com/package/geo-coordinates-parser

export default function GeoCoordinatesParser() {
  let converted;
  let coords;
  let dd;
  let dms;
  let dm;
  
  

  try {
    coords = 'N64 38.4190, W146 40.3656'
    converted = convert(coords, 5);
    //  converted.decimalLatitude; // 40.446195 ✓
    // converted.decimalLongitude; // -79.948862 ✓
    // converted.verbati mLatitude; // '40° 26.7717' ✓
    // converted.verbatimLongitude; // '-79° 56.93172' ✓

    dd = converted.decimalCoordinates;

    dms = converted.toCoordinateFormat(convert.to.DMS);

    dm = converted.toCoordinateFormat(convert.to.DM);

  } catch {
    /*we get here if the string is not valid coordinates or format is inconsistent between lat and long*/
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            GeoCoordinatesParser
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>{coords}</Box>
      
      <Box>{dd}</Box>
      <Box>{dms}</Box>
      
      <Box>{dm}</Box>

      <Box>
<ReturnedCoords input={converted} />
      </Box>
      
    </Box>
  );
}


function ReturnedCoords(props){
  const converted = props.input;
  const dd = converted.decimalCoordinates;
  const dms = converted.toCoordinateFormat(convert.to.DMS);
  const dm = converted.toCoordinateFormat(convert.to.DM);
  return(
    // <Box>
    // <Box>{dd}</Box>
    // <Box>{dms}</Box>
    
    // <Box>{dm}</Box>
    // </Box>
true
    // {
    //   ["dd": {dd}],['dd':{dms}],['dd':{dm}]
    // }

  )
}