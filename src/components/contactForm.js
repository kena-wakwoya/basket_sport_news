import { Button, makeStyles, TextField } from '@material-ui/core';
import React, {useState} from  'react';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box } from '@mui/system';


import { ContactInformation } from './contactInformation';
import { ContactIcons } from './contactIcons';
import { MenuBar } from './menuBar';
import { ImageView } from './imageView';

const useStyles = makeStyles({
    contactForm:{
        width:"40%",
        alignItems:'center',
        marginLeft:'40%'

    },
    txtField:{
        marginTop:"2%",
        fontFamily:'popins',
        color:'rgba(0, 0, 0, 0.5)',
        fontWeight:400,
    },
    btn:{
        backgroundColor:'#2F2C2C',
        fontFamily:'popins',
        fontSize:'110%',
        lineHeight: '24px',
        padding:'1em',
        justifyItems:'center',
        margin:'1em',
        
        color:'white',
        width:'84%',
        '&:hover':{
            backgroundColor:'#2F2C2C'

        }


    },
    cIcon:{
        color:'#FCE61D',
        padding:'0.6em',
        fontSize:'10em'
    },
    txt:{
        color:'#201F1E',
        fontFamily:'poppins',
        fontWeight:'400'
        
    },
    rectangle:{
        
        height:'70px',
        backgroundColor:'#F9E31D',
        height:'100px'
        
    }

})

const initialFormValues = {
    fullName:'',
    address:'',
    phone:'',
    message:''

}
 export const ContactForm = (props)=>{
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
        <div className = {classes.contactForm}>

            {/* <MenuBar /> */}

            <ImageView />
            <div className = {classes.rectangle}>
            
            </div>
            <div>
                <p className = {classes.txt}>
                    We won't be sharing any of your information with any one. We are completely at your service
                </p>
            </div>

           
           <TextField className = {classes.txtField} 
           label="Full Name" 
           name = "fullName"
            value = {formValue.fullName}
            onChange = {handleChange}

           fullWidth />
           <TextField 
           
           label="Contact Address"  
           name = "address"
           value = {formValue.address}
           onChange = {handleChange}

           fullWidth />
           <TextField 
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
            fullWidth
            />

            <Button 
            className = {`${classes.txtField} ${classes.btn}`} 
            variant="contained" 
            onClick = {handleSubmit}
            endIcon={<TelegramIcon className = {classes.cIcon}
           
            />}>
        SEND MESSAGE 
      </Button>

      <div>
          < ContactInformation />
      </div>
           <div>
               <ContactIcons />
               </div>
        </div>
    )
}

