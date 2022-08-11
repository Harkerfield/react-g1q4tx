import React, { Component } from 'react';
//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            <h1>
              354 RANS - JPARC Emitter Status and Training Request (JESTR) 2.0
            </h1>

            <p>
              This site will be used to view the JPARC emitters. New features
              include bombable target registration.
            </p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
