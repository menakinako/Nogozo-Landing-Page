import AdjustIcon from '@mui/icons-material/Adjust';
import { Typography, Box } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import { TimeLineElements } from '../constants/TimeLineElements';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.css"
import Banner from './Banner';
import NavBar from './Navbar'
import Features from './Features';
import Customers from './Customers';
import Faqs from './Faqs'
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const useStyles=makeStyles(theme=>({
   container:{
     
   },
    date:{
    color: "rgb(201, 251, 255)"
   },
   image:{
    marginLeft:150,
     width:90,
     height:70,
     [theme.breakpoints.down('sm')]:{
      marginLeft:0
   },
   }
}));


const TimeLine=()=>{
    const classes = useStyles();
    useEffect(()=>{
      window.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {  AOS.init({
          startEvent: 'DOMContentLoaded',
          duration:2700});
        AOS.refreshHard();
        AOS.refresh() }, 500);
      })
     
    }, [])
    return(
      <div style={{position:"absolute",
      width:"100%",
      color:"#000000"}}>
          <Box style={{position:"absolute", width:"100%"}}>
          <NavBar />
          <Banner/>
          <Typography variant="h3" data-aos="fade-right" style={{color:'#ffffff', marginTop:-170, textAlign:"center", marginBottom:50,}} >How it Works</Typography>
          <VerticalTimeline>
              {
                  TimeLineElements.map((i)=>{
                      return(
                          <VerticalTimelineElement
                            key={i.id}
                            date={i.id}
                            contentStyle={{background:"#f7f5f5"}}
                            dateClassName={classes.date}
                            iconStyle={{background:"#f9c74f"}}
                            icon={<AdjustIcon />}
                          >
                             <img src={i.image} className={classes.image} />
                             <Typography className="vertical-timeline-element-title" data-aos="zoom-in" style={{fontWeight:600, fontSize:22, textAlign:"center"}}>{i.title}</Typography>
                             <Typography>{i.description}</Typography>
                          </VerticalTimelineElement>
                      )
                  })
              }
          </VerticalTimeline>
          <Features />
          <Customers />
          <Faqs />
          <Footer />
          </Box>
      </div>
    )
}

export default TimeLine;