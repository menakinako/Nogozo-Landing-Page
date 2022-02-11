import { Box, Typography } from "@mui/material"
import { makeStyles } from "@material-ui/core";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const useStyle = makeStyles(theme=>({
    container:{
        display:"flex",
        flexDirection:"row",
        height: 280,
         marginTop:50,
         color:"#f7f5f5",
         padding:"0 30px",
         [theme.breakpoints.down('md')]:{
            height: 580,
            display:"flex",
            flexDirection:"column",
            marginTop:150,
            padding:"15px 30px"
         },
    },
    text:{
        color:"#f7f5f5",
        textAlign:"center" ,
        [theme.breakpoints.down('md')]:{
            marginTop:550
         },
    },
    contacts:{
        [theme.breakpoints.down('md')]:{
            marginTop:10,
            marginBottom:10
         },
    }
}))


const Footer =()=>{
    const classes = useStyle();
    return(
        <Box>
        <Box className={classes.container}>
          <Box><Typography style={{width:"53%"}}>More About Us!
Ever wanted to buy a book but could not because it was too expensive? Worry not! Because Nogozo is at your rescue! Nogozo team is committed to bring to you all kinds of best books at the minimal prices ever seen anywhere to let you buy, rent or sell according to your convenience.</Typography></Box>
          <Box style={{display:"flex", flexDirection:"column", width:"43%"}} className={classes.contacts}>
              <Typography>Connect With Us!</Typography>
              <Typography><span><WhatsAppIcon/></span>Whatsapp</Typography>
               <Typography><span><LinkedInIcon/></span>LinkedIn</Typography>
               <Typography><span><InstagramIcon/></span>Instagram</Typography>
                <Typography><span><MailOutlineIcon/></span>Mail</Typography></Box>
          <Box><Typography>Help
Request book & Place Order

Cancellation & Return

Payment & Shipping

Other</Typography></Box>
</Box>
<Typography className={classes.text}>© 2020-2021 NOGOZO PRIVATE LIMITED</Typography>
        </Box>
    )
}

export default Footer;


