import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function ButtonAppBar() {
    
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ height:'80px', background: 'rgb(102, 148, 235)' }}>
        <Link to={"/"}><HomeIcon color='action' fontSize='large' /></Link>
        </Toolbar>
      </AppBar>
      </>
  );
}