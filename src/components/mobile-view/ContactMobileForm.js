import { Button, makeStyles, TextField } from '@material-ui/core';
import React, {useState} from  'react';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box } from '@mui/system';


import { ContactInformation } from './contactInformation';
import { ContactIcons } from './contactIcons';
import { MenuBar } from './menuBar';
import { ImageView } from './imageView';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    contactForm:{
        width:"100%",
        alignItems:'center',


    },
    txtField:{
        marginTop:"2em",
        fontFamily:'Poppins',
        color:'rgba(0, 0, 0, 0.5)',
        
    },
    btn:{
        backgroundColor:'#2F2C2C',        
        lineHeight: '24px',        
        width:'234px',
        height:'55px',
        color:'#FFFFFF',
        
        justifyContent:'center',
        '&:hover':{
            backgroundColor:'#2F2C2C'

        }


    },
    cIcon:{
        color:'#FCE61D',
        paddingLeft:'1em',
        width:'30px',
        height:'20px'
    },
    txt:{
        color:'#201F1E',
        fontFamily:'Poppins',
        padding:'1em'
        
        
    },
    rectangle:{
        
        height:'70px',
        backgroundColor:'#F9E31D',
        height:'100px'
        
    },
    txt1:{
        
        fontFamily:'Poppins',
        padding:'1em'

    },
    input:{
        color:'green'
    }


})

const initialFormValues = {
    fullName:'',
    address:'',
    phone:'',
    message:''

}
 export const ContactMobileForm = (props)=>{
     const [formValue,setFormValue] = useState(initialFormValues);
     const classes = useStyles();
   const handleChange = (e)=>{
        const {name,value} = e.target;
        
         setFormValue({
             ...formValue,
             [name]:value,
         })

     }
   const  handleSubmit = (e)=>{
       e.preventDefault();
         console.log("data");
         console.log(formValue);
     }
    return (
        <Box className = {classes.contactForm}>

            
            <ImageView />
            <Box className = {classes.rectangle}>
            
            </Box>
            <Box>
                <Typography className = {classes.txt}>
                    We won't be sharing any of your information with any one. We are completely at your service
                </Typography>
            </Box>

           <Box className = {classes.txt1}>
           <TextField className = {classes.txtField} 
           label="Full Name" 
           name = "fullName"
            value = {formValue.fullName}
            onChange = {handleChange}

           fullWidth />
           <TextField 
           className = {classes.txtField}            
           label="Contact Address"  
           name = "address"
           value = {formValue.address}
           onChange = {handleChange}

           fullWidth />
           <TextField 
           className = {classes.txtField} 
           label="Phone"  
           name = "phone"
           value = {formValue.phone}
           onChange = {handleChange}

           fullWidth />
           <TextField className = {classes.txtField}
           name = "message"
           value = {formValue.message}
           onChange = {handleChange}
            multiline
            rows={10}
            variant="filled"
            placeholder = "Type your message here"
            inputProps = {{className:classes.input}}
            fullWidth
            />
            <Box textAlign = "center">
                <Button 
                className = {`${classes.txtField} ${classes.btn}`} 
                
                onClick = {handleSubmit}
                endIcon={<TelegramIcon className = {classes.cIcon}/>}>
                    SEND MESSAGE 
                </Button>
            </Box>
      </Box>

      <Box>
          < ContactInformation />
      </Box>
           <Box>
               <ContactIcons />
               </Box>
        </Box>
    )
}

