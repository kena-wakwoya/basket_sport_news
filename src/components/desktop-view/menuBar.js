import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    info:{
    background: '#2F2C2C',  
    },
    appbar: {
      backgroundColor: 'white',
    },
    toolbar: {
      minHeight: '84px',
      backgroundColor: 'white'
    },
    headerImage: {
      backgroundColor: 'yellow',
      height: '86px',
      width: '332px'
    },
    imagebox: {
      top: '5px',
      left: '103px'
    }




})

export const MenuBar = (props)=>{
    const classes = useStyles();

    return (
      <Box>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar} >
      
                <Box className={classes.headerImage}>
                    <Box className={classes.imagebox} pt={1} pl={1}> 
                       <img alt="" src="./assets/images/darklogo.png" width="202px" height="72px" />
                    </Box>
                </Box>


          </Toolbar>
        </AppBar>
      </Box>
    )
}
