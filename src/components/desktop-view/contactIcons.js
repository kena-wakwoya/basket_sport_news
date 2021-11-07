import React from 'react';
import {Grid, makeStyles,} from '@material-ui/core'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Box from '@mui/material/Box';

const useStyles = makeStyles({
    bg:{
        backgroundColor:'yellow',
    },
})
export const ContactIcons = () =>{
    const classes = useStyles();
    return (
    <Box className = {classes.bg}>
        <Grid container spacing = {1} alignContent= "center">
            <Grid item xs = {3}></Grid>
            <Grid item xs = {2}> <FacebookIcon /></Grid>
            <Grid item xs = {2}> <InstagramIcon /></Grid>
            <Grid item xs = {2}> <TwitterIcon /></Grid>
        </Grid>
    </Box>
    )
}