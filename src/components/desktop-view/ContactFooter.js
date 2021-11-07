import React from 'react';
import {Grid, makeStyles,} from '@material-ui/core'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../images/logo.png'
const useStyles = makeStyles({
    bg:{
        backgroundColor:'#fff',
       
        height:'10em',
        marginTop:'1em',
        paddingLeft:'2em',
        paddingRight:'2em'
    },
    end:{
        backgroundColor:'#000'
    },
    img:{
        alignItems:'center'
    },
    txt:{
        color:'#fff',
    }
})
export const ContactFooter = () =>{
    const classes = useStyles();
    return (
    <>
    <Grid container
    spacing = {3}
    alignContent= "center" 
    className = {classes.bg}
    >
        <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
        <FacebookIcon />
        </Grid>
        <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
           <InstagramIcon />
        </Grid>
        <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
            <TwitterIcon />
        </Grid>
    </Grid>
    
<div className = {classes.end} >
    <img src = {logo} className = {classes.img} />
    <h3 className = {classes.txt}> Cras convallis feugiat felis eget venenatis. Sed leo tellus, luctus eget ante quis, rutrum dignissim enim. Morbi efficitur tellus non mauris tincidunt feugiat.  </h3>
        <div>
            <h2 className = {classes.txt}> Contact Us</h2>
            <Grid container
    spacing = {3}
    alignContent= "center" 
    className = {classes.text}
   
    >
        <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
           <InstagramIcon className = {classes.txt} />
        </Grid>
        <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
            <TwitterIcon className = {classes.txt} />
        </Grid>
        <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
        <FacebookIcon className = {classes.txt} />
        </Grid>
    </Grid>
        </div>
</div>
</>
    )
}