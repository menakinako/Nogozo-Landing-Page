import { useEffect } from 'react';
import { Box, Typography } from "@mui/material"
import { Animator,batch,Fade,FadeIn,Move,MoveIn,
         MoveOut,ScrollContainer,ScrollPage,Sticky,StickyIn,ZoomIn } from 'react-scroll-motion';
import Services from "./Services";         
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pic from '../images/—Pngtree—world reading day books reading_4484969.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CounterUp from 'react-countup'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  container:{
    width:"100%",
     zIndex:6,
      color:"#000000"
      , marginBottom:200,
       background:"#f7f5f5",
        height: 1280,
        [theme.breakpoints.down('lg')]:{
          height:2050
       },
       [theme.breakpoints.up('lg')]:{
        height:1280
     },
  },
  value:{
    margin: 20,
    padding:20,
    color:"#ffad15",
    [theme.breakpoints.down('sm')]:{
      marginLeft: -50,
      padding:10,
      marginTop:10
   },
  },
  icon:{
    width:"5em !important",
    height:150,
  },
  image:{
    width:500,
    height:250,
    marginLeft: 400,
    [theme.breakpoints.down('sm')]:{
      width:200,
      height: 150,
      marginLeft: 50,
   },
   [theme.breakpoints.between('sm', 'md')]:{
    width:320,
    height: 250,
    marginLeft: 200,
 },
  },
  valueContainer:{
    display:"flex",
    flexDirection:"row",
    marginLeft:35,
    [theme.breakpoints.down('sm')]:{
      display:"flex",
      flexDirection:"column",
      marginLeft:15,
   },
  },
  body:{
    marginLeft: 100,
    [theme.breakpoints.down('sm')]:{
      marginLeft:10,
   },
  }
}))


const About =()=>{
  const classes = useStyles();
  useEffect(()=>{
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration:2000});
      AOS.refreshHard();
      AOS.refresh()
  }, [])
    return(
    <Box className={classes.container}>
       <ScrollPage page={2}>
       <Typography variant="h3" style={{textAlign:"center", marginTop:20, color:"#6b075e"}} data-aos="fade-right" data-aos-duration="2400">About Us</Typography>
         <div  data-aos="zoom-in-down"
     data-aos-easing="linear"
     data-aos-duration="1500"><img src={pic} className={classes.image} /></div> 
        <div className={classes.body}>
          <Typography variant="h6" style={{textAlign:"center"}}>
            <Animator animation={MoveIn(-900, 0)}>NOGOZO is an e-commerce platform which allows users to BUY, RENT and SELL NEW as well as USED BOOKS (Academic + Non-Academic) with same day delivery.</Animator>
            <Animator animation={MoveIn(1000, 0)}>Pickup of books and novels for renting and re-selling is totally free of cost.</Animator>
           <Box className={classes.valueContainer}>
             <Box className={classes.value}>
                 <EmojiEmotionsIcon className={classes.icon} />
                <Typography variant="h5" data-aos="fade-down">Happy Patrons</Typography>
                <CounterUp
                end={2840}
                duration={21}
                />
             </Box>
             <Box className={classes.value}>
               <LibraryBooksIcon className={classes.icon}/>
                <Typography variant="h5" data-aos="fade-down">Books</Typography>
                <CounterUp
                end={31459}
                duration={21}
                />
             </Box>
             <Box className={classes.value}>
                 <LocalShippingIcon className={classes.icon}/>
                 <Typography variant="h5" data-aos="fade-up">Deliveries Made</Typography>
                 <CounterUp
                end={40928}
                duration={21}
                />
              </Box>
            <Box className={classes.value}>
              <ShoppingCartIcon className={classes.icon}/>
              <Typography variant="h5" data-aos="fade-up">Books Lent Out</Typography>
              <CounterUp
                end={93125}
                duration={21}
                />
            </Box>
          </Box>
          </Typography>
        </div>
      </ScrollPage>
      <Services />
    </Box>
    )
}

export default About;