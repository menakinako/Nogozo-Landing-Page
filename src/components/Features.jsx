import { Box, Typography} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import styles from './boxes.module.css';
import { motion } from "framer-motion";
import pic1 from '../images/responsive-website.png';
import pic2 from '../images/free-shipping.png';
import pic3 from '../images/resell-removebg-preview.png';
import pic4 from '../images/rent.png';
import pic5 from '../images/free.png';
import pic6 from '../images/customer-service.png';
import clsx from 'clsx'

const useStyles = makeStyles(theme=>({
  container:{
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down('sm')]:{
      display:"flex",
      flexDirection:"column"
   },
   [theme.breakpoints.between('sm','md')]:{
    display:"flex",
    flexDirection:"column",
    marginLeft:200
 },
   [theme.breakpoints.up('lg')]:{
    display:"flex",
    flexDirection:"row",
 }
  },
  title:{
    textAlign:"center",
    color:"#6b075e"
  },
  image:{
    width:150,
    heigth:100,
    marginLeft: 100,
    marginTop: 50,
    [theme.breakpoints.down('md')]:{
     marginLeft: 80,
     width: 90,
     height:90
   }
  },
  specialImage:{
    width: 210, marginLeft:70,
    [theme.breakpoints.down('md')]:{
      marginLeft: 50,
      width: 150,
      height:100
    }
  },
  subtitle:{
    textAlign:"center",
    color:"#f7f5f5"
  },
  description:{
    color:"#dbdada",
    padding:"0 20px 0 20px"
  }
}))


const Features =()=>{
const classes=useStyles();

  useEffect(()=>{
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration:2000});
      AOS.refreshHard();
      AOS.refresh()
  }, [])
    return(
        <Box style={{marginTop:70, background:"#f7f5f5", maxWidth:"100%"}}>
          <Typography variant="h3" style={{paddingTop:50}} className={classes.title} data-aos="fade-right" data-aos-duration="1000">Features</Typography>
          <Box className={classes.container}>
          <motion.div 
               whileHover={{translateY:-30}}
             >
           <div className={styles.box} data-aos="flip-left">
             <motion.img src={pic1} className={classes.image} whileHover={{rotate:360}} transition={{duration:1}}/> 
             <Typography variant="h5" className={classes.subtitle}>All-in-one-Platform</Typography>
              <Typography variant="body2" className={classes.description}>A single dedicated platform to buy, rent and sell new as well as used books.</Typography>
           </div>
           </motion.div>
           <motion.div 
               whileHover={{translateY:-30}}
             >
           <div className={styles.box} data-aos="flip-up">
             <motion.img src={pic2} className={classes.image} whileHover={{rotate:360}} transition={{duration:1}}/> 
             <Typography variant="h5" className={classes.subtitle}>Free Delivery</Typography>
              <Typography variant="body2" className={classes.description}>Get free delivery at your doorstep on all orders above ₹999.</Typography>
           </div>
           </motion.div>
           <motion.div 
               whileHover={{translateY:-30}}
             >
           <div className={styles.box}data-aos="flip-right">
              <motion.img src={pic3} className={clsx(classes.image, classes.specialImage)} whileHover={{rotate:360}} transition={{duration:1}}/> 
              <Typography variant="h5" className={classes.subtitle} style={{marginTop:-20}}>Instant Reselling</Typography>
              <Typography variant="body2" className={classes.description}>Sell your books while sitting at home with free pickup within 24 hours.</Typography>
           </div>
           </motion.div>
          </Box>
          <Box className={classes.container}>
          <motion.div 
               whileHover={{translateY:-30}}
             >
          <div className={styles.box} data-aos="flip-left">
              <motion.img src={pic4} className={classes.image} whileHover={{rotate:360}} transition={{duration:1}}/> 
              <Typography variant="h5" className={classes.subtitle}>Rent Books</Typography>
              <Typography variant="body2" className={classes.description}>Rent all academic and non-academic books & novels starting from ₹10 only.</Typography>
          </div>
          </motion.div>
          <motion.div 
               whileHover={{translateY:-30}}
             >
           <div className={styles.box} data-aos="flip-up">
             <motion.img src={pic5} className={classes.image} whileHover={{rotate:360}} transition={{duration:1}}/> 
             <Typography variant="h5" className={classes.subtitle}>Free Pickup</Typography>
              <Typography variant="body2" className={classes.description}>Pickup of books and novels for renting and re-selling is totally free of cost.</Typography>
           </div>
           </motion.div>
           <motion.div 
               whileHover={{translateY:-30}}
             >
           <div className={styles.box}data-aos="flip-right">
              <motion.img src={pic6} className={classes.image} whileHover={{rotate:360}} transition={{duration:1}}/> 
              <Typography variant="h5" className={classes.subtitle}>Customer Support</Typography>
              <Typography variant="body2" className={classes.description}>Get 24X7 chat support help to address all your doubt & queries.</Typography>
           </div>
           </motion.div>
          </Box>
        </Box>
    )
}

export default Features;