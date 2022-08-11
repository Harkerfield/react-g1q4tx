import React, { Component } from 'react';
//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Button from '@mui/material/Button';

import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ArchitectureIcon from '@mui/icons-material/Architecture';

import { styled, useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import GeoCoordinatesParser from './geoCoordinatesParser/GeoCoordinatesParser.js';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <CardLayout />
    </Box>
  );
}

function CardLayout() {
  const cardLinks = [
    {
      to: '/scheduler',
      name: 'Scheduler',
      icon: <ScheduleIcon />,
    },
    {
      to: '/checker',
      name: 'Checker',
      icon: <EventAvailableIcon />,
    },
    {
      to: '/dashboard',
      name: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      to: '/siteMaps',
      name: 'Site Maps',
      icon: <MapIcon />,
    },
    {
      to: '/contact',
      name: 'Contact',
      icon: <ContactSupportIcon />,
    },
    {
      to: '/About',
      name: 'About',
      icon: <InfoIcon />,
    },
    {
      to: '/admin',
      name: 'Admin',
      icon: <AdminPanelSettingsIcon />,
    },
    {
      to: '/lists',
      name: 'Lists',
      icon: <AdminPanelSettingsIcon />,
    },
    {
      to: '/geo',
      name: 'Geo',
      icon: <ArchitectureIcon />,
    },
  ];

  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <Grid container spacing={2}>
        {cardLinks.map((link) => (
          <Grid item xs={4}>
            <Link to={link.to}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      {link.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      {link.icon}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
