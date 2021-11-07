import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import TelegramIcon from "@mui/icons-material/Telegram";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@material-ui/core/CardContent";

import { ContactInformation } from "./contactInformation";
import { ContactIcons } from "./contactIcons";
import { MenuBar } from "./menuBar";

const useStyles = makeStyles({
  contactForm: {
    alignItems: "center",
  },
  imageView: {
    //   backgroundImage: `url($ImageBack)`,
  },
  typgo: {
    fontFamily: "Poppins",
    color:'#E5E5E5',
    
    fontWeight: 700,
    fontSize: 94,
  },
  txtField: {
    marginTop: "2em",
    fontFamily: "Poppins",
    color: "rgba(0, 0, 0, 0.5)",
  },
  contactBox: {},
  btn: {
    backgroundColor: "#2F2C2C",
    fontFamily: "popins",
    fontSize: "110%",
    justifyItems: "center",
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "#2F2C2C",
    },
  },
  circle1: {
    borderRadius: 300,
    backgroundColor: "#FCE61D",
    height: 400,
    width: 400,
  },
  circle2: {
    borderRadius: 100,
    backgroundColor: "#FCE61D",
    height: 200,
    width: 200,
  },
  span:{
    color:"yellow"
},
typ:{
    color:'#FFFFFF',
    
    textAlign:'center'
},
  cIcon: {
    color: "#FCE61D",
    padding: "0.6em",
    fontSize: "10em",
  },
  txt: {
    color: "#201F1E",
    fontFamily: "poppins",
    fontWeight: "400",
  },
  rectangle: {
    height: "70px",
    backgroundColor: "#F9E31D",
    height: "100px",
  },
});

const initialFormValues = {
  fullName: "",
  address: "",
  phone: "",
  message: "",
};
export const ContactDesktopForm = (props) => {
  const [formValue, setFormValue] = useState(initialFormValues);
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data");
    console.log(formValue);
  };
  return (
    <Box className={classes.contactForm}>
      <Box
        style={{
          backgroundImage: "url(./assets/images/beautiful-young-woman.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: 1030,
          opacity: "0.8",
        }}
      >
        <Box>
          <Box pt={1}></Box>

          {<MenuBar />}

          <Box pt={10}>
            <Typography className={classes.typgo} variant="h2" align="center">
              {" "}
              We are ready to
            </Typography>
            <Typography className={classes.typgo} variant="h2" align="center">
              {" "}
             <span className = {classes.span}> hear </span> from you!
            </Typography>
          </Box>

          <Box pt={5} >
            <Typography
              className={classes.typ}
              variant="h6"
              align="center"
            >
              {" "}
              You can reach by calling us, sending a message or even pay a
            </Typography>
            <Typography variant="h6" align="center" className = {classes.typ}>
              {" "}
              warm visit
            </Typography>
          </Box>

          <Box pt={40} sx={{ display: "flex", position: "absolute" }}>
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={6}>
                <Card className={classes.contactBox}>
                  <CardContent>
                    <Typography className={classes.txt}>
                      We won't be sharing any of your information with any one.
                      We are completely at your service
                    </Typography>

                    <TextField
                      className={classes.txtField}
                      label="Full Name"
                      name="fullName"
                      value={formValue.fullName}
                      onChange={handleChange}
                      fullWidth
                    />

                    <TextField
                      className={classes.txtField}
                      label="Contact Address"
                      name="address"
                      value={formValue.address}
                      onChange={handleChange}
                      fullWidth
                    />

                    <TextField
                      className={classes.txtField}
                      label="Phone"
                      name="phone"
                      value={formValue.phone}
                      onChange={handleChange}
                      fullWidth
                    />

                    <TextField
                      className={classes.txtField}
                      name="message"
                      value={formValue.message}
                      onChange={handleChange}
                      multiline
                      rows={10}
                      variant="filled"
                      placeholder="Type your message here"
                      fullWidth
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5}>
                <ContactInformation />
                <ContactIcons />
                <Box pt={2}>
                  <Button
                    className={`${classes.txtField} ${classes.btn}`}
                    variant="contained"
                    onClick={handleSubmit}
                    endIcon={<TelegramIcon className={classes.cIcon} />}
                  >
                    SEND MESSAGE
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={0.5}></Grid>
            </Grid>
          </Box>

          <Box pl={175} pt={30}>
            <Box className={classes.circle1}></Box>
          </Box>
        </Box>
      </Box>

      <Box pl={1} pt={30}>
        <Box className={classes.circle2}></Box>
      </Box>
    </Box>
  );
};
