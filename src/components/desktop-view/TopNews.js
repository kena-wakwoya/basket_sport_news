import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import { Box, fontFamily, width } from '@mui/system';
import React from 'react';



const useStyles = makeStyles({
    wholeBox:{
        color: '#111111',
        width:'100%',
        height:'1094px',
        margin:'1em'
        

    } ,
    img:{
        width:'80%',
        height:'40%'
    },
    items:{
        margin:'1em'

    }   ,
    typo:{
        

        color:'#FFFFFFE5',
        fontFamily:'Poppins',

    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

})
export const TopNews = ()=>{
    const classes = useStyles();
    return (
        <Box classsName = {classes.wholeBox} backgroundColor="#111111">   
            <Grid container
                justifyContent='center'
                justifyItems='center'
                rowSpacing = {3}
                columnSpacing = {{xs:1,sm:3}}
            >
                <Grid item sm = {3} className = {classes.items}>
                    <img src = './assets/images/beautiful-young-woman.jpg' className = {classes.img} />
                </Grid>
                <Grid item sm = {8} className = {classes.items}>
                    <Typography variant = "h4" className = {classes.typo} class>Here it goes</Typography>
                </Grid>
                <Grid item sm = {3} className = {classes.items}>
                    <img src = './assets/images/beautiful-young-woman.jpg' className = {classes.img} />
                </Grid>
                <Grid item sm = {8} className = {classes.items}>
                    <Typography variant = "h4" className = {classes.typo}>Here it goes</Typography>
                </Grid>
                <Grid item sm = {3} className = {classes.items}>
                    <img src = './assets/images/beautiful-young-woman.jpg' className = {classes.img} />
                </Grid>
                <Grid item sm = {8} className = {classes.items}>
                    <Typography variant = "h4" className = {classes.typo}>Here it goes</Typography>
                </Grid>
                <Grid item sm = {3} className = {classes.items}>
                    <img src = './assets/images/beautiful-young-woman.jpg' className = {classes.img} />
                </Grid>
                <Grid item sm = {8} className = {classes.items}>
                    <Typography variant = "h4" className = {classes.typo}>Here it goes</Typography>
                </Grid>
                <Grid item sm = {3} className = {classes.items}>
                    <img src = './assets/images/beautiful-young-woman.jpg' className = {classes.img} />
                </Grid>
                <Grid item sm = {8} className = {classes.items}>
                    <Typography variant = "h4" className = {classes.typo}>Here it goes</Typography>
                </Grid>
            </Grid>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

        </Box>
    )
}