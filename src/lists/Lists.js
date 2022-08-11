import React, { Component } from 'react';
//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Route, Switch } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';

import Lists from '../lists/Lists.js';
import ThreatsList from '../lists/ThreatsList.js';



import { useContext } from "react";

export default function Lists() {



  return (
    <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Lists
            </Typography>
          </Toolbar>
        </AppBar>

        <Link to="/lists"> Lists</Link>

        <Link to="threatslist">Threats Lists</Link>

        <Routes>
          <>
            <Route exact path="threatslist" element={<ThreatsList />} />
            <Route path="/lists/1" element={<ThreatsList />} />
          </>
        </Routes>


        
    </Box>
  );
}

// function LayoutLinks1() {
//   const menuLinks = [

//     {
//       to: '/lists/threatslist',
//       name: 'Threats List',
//       icon: <HomeIcon />,
//     },
//     {
//       to: '/scheduler',
//       name: 'Scheduler',
//       icon: '',
//     },
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {menuLinks.map((link) => (
//         <Link to={link.to}>
//           <Button
//             style={{ padding: '10px 20px', textAlign: 'center' }}
//             color="inherit"
//           >
//             {link.name}
//           </Button>
//         </Link>
//       ))}

//       <Outlet />
//     </Box>
//   );
// }

// function NoMatch() {
//   return /*#__PURE__*/ React.createElement(
//     'div',
//     null,
//     /*#__PURE__*/ React.createElement('h2', null, 'Nothing to see here!'),
//     /*#__PURE__*/ React.createElement(
//       'p',
//       null,
//       /*#__PURE__*/ React.createElement(
//         Link,
//         {
//           to: '/',
//         },
//         'Go to the home page'
//       )
//     )
//   );
// }
