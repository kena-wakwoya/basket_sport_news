import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { width } from '@mui/system';
// import ImageBack from '../../public/assets/images/beautiful-young-woman.jpg'

const useStyles = makeStyles({

    imageView: {
    //   backgroundImage: `url($ImageBack)`,
    },
    typgo:{
        paddingTop:'2em',
        

    }




})

export const ImageView = (props)=>{
    const classes = useStyles();

    return (

    <Box style={{ backgroundImage: "url(./assets/images/beautiful-young-woman.jpg)", backgroundSize:'cover', width: '100%',
    height: 500,opacity:'0.4'}}> 
    <img src = './assets/images/logo.png' />
    <Typography className = {classes.typgo} variant = "h3"> we are ready to hear from you!</Typography>
    <Typography variant = "h6"> You can reach by calling us, sending a message or even pay a warm visit</Typography>
    </Box>


    )
}
