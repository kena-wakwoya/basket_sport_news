import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles({
    info:{
    background: '#2F2C2C',
    
        
    },
    ttile:{
        fontFamily:'Quicksand',
        fontWeight:'700',
        fontSize:'30px',
        lineHeight:'38px',
        color:'#FFFFFF',
        padding:'80px'
        
    },
    ic:{
        color:'#FFFFFF',
        paddingLeft:'80px'

    },
    ictext:{
        fontFamily:'Quicksand',
        fontWeight:'400',
        color:'#FFFFFF',
        // padding:'80px'
    }


})

export const ContactInformation = (props)=>{
    const classes = useStyles();

    return (
        <div className = {classes.info}>
            <h1 className = {classes.ttile}> Contact Information</h1>
        <Grid container spacing={3}>
        <Grid item xs={4}>
          <CallIcon className = {classes.ic} />
        </Grid>
        <Grid item xs={8}>
        <p className = {classes.ictext}>+234123456789 </p>
        </Grid>
        <Grid item xs={4}>
        <MailIcon className = {classes.ic} />
        </Grid>
        <Grid item xs={8}>
        <p className = {classes.ictext}>details@reachus.now </p>
        </Grid>
        <Grid item xs = {4}>
            <LocationOnIcon  className = {classes.ic}/>
        </Grid>
        <Grid item xs = {4}>
        <p className = {classes.ictext}>No 2A my company venue </p>
        </Grid>
      </Grid>
            
        

        </div>
    )
}
