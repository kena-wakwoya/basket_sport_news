import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../images/logo.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const useStyles = makeStyles({
  bg: {
    backgroundColor: "#fff",

    height: "10em",
    marginTop: "1em",
   
    
  },
  end: {
    backgroundColor: "#000",
  },
  img: {
    alignItems: "center",
  },
  txt: {
    color: "#fff",
  },
});
export const ContactIcons = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} alignContent="center" className={classes.bg}>
      <Grid item xs={3} sm={3}  />
         
        
        <Grid item xs={2} sm={2} md={2} >
          <FacebookIcon />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <InstagramIcon />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <TwitterIcon />
        </Grid>
      </Grid>
      <Box className={classes.end}>
        <img src={logo} className={classes.img} />
        <Typography className={classes.txt}>
          {" "}
          Cras convallis feugiat felis eget venenatis. Sed leo tellus, luctus
          eget ante quis, rutrum dignissim enim. Morbi efficitur tellus non
          mauris tincidunt feugiat.{" "}
        </Typography>
        <Box>
          <Typography className={classes.txt}> Contact Us</Typography>
          <Grid
            container
            spacing={3}
            alignContent="center"
            className={classes.text}
          >
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <InstagramIcon className={classes.txt} />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <TwitterIcon className={classes.txt} />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <FacebookIcon className={classes.txt} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
