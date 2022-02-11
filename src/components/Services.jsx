import { Box, Typography, Grid, Card, CardContent } from "@mui/material"
import { makeStyles } from "@material-ui/core";
import 'aos/dist/aos.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import buy from '../images/buy-removebg-preview.png';
import rent from '../images/rentbook-removebg-preview.png';
import sell from '../images/sell-removebg-preview.png';

const useStyles = makeStyles(theme=>({
  container:{
    marginTop:50, display:"flex", flexDirection:"row",
    [theme.breakpoints.down('md')]:{
      display:"flex",
      flexDirection:"column",
   },
  },
  title:{
    textAlign:"center",
    color:"#6b075e"
  }
}))

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  color: #fff;
  position: relative;
  cursor: grab;
 
  @media (max-width: 1200px) {
    width: 255px;
    height: 350px; 
    margin-bottom:70px
  }
  
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  flex-direction:column;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  };
  
  @media (max-width: 1200px) {
    height: 100px; 
  }
`;


const Services =()=>{
  const classes = useStyles();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  

  useEffect(()=>{
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration:2000});
      AOS.refreshHard();
      AOS.refresh()
    console.log("hello")
  }, [])
    return(
        <Box>
          <Typography variant="h3"   data-aos="fade-right" className={classes.title}>Our Services</Typography>
          <Box className={classes.container} data-aos="fade-up">
          <CardWrapper>
         <CardContainer 
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
         >
        <TopContainer>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
              whileHover={{translateY:-50}}
            >
              <img src={buy} />
            </Shoes>
          </ShoesWrapper>
        </TopContainer>
        <BottomContainer>
          <Typography variant="h4" style={{marginLeft:100}}>Buy</Typography>
          <Typography style={{textAlign:"center", fontSize:12}}>(Drag me)</Typography>
          <ul style={{listStyleType:"none", marginTop: 10, marginLeft:20, color:"#f7f5f5" }}>
            <li><Typography variant="caption text">New Books</Typography></li>
            <li><Typography variant="caption text">Second-hand Books</Typography></li>
            <li><Typography variant="caption text">24 hour delivery</Typography></li>
            <li><Typography variant="caption text">School & Competition books</Typography></li>
          </ul>
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
    <CardWrapper>
         <CardContainer 
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
         >
        <TopContainer>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
              whileHover={{translateY:-50}}
            >
              <img src={rent} />
            </Shoes>
          </ShoesWrapper>
        </TopContainer>
        <BottomContainer>
        <Typography variant="h4" style={{marginLeft:100}}>Rent</Typography>
        <Typography style={{textAlign:"center", fontSize:12}}>(Drag me)</Typography>
          <ul style={{listStyleType:"none", marginTop: 10, marginLeft:20, color:"#f7f5f5" }}>
            <li><Typography variant="caption text">Starting at ₹10</Typography></li>
            <li><Typography variant="caption text">Delivery within 24 hours</Typography></li>
            <li><Typography variant="caption text">FREE Pickup</Typography></li>
            <li><Typography variant="caption text">All fiction & non-fiction novels</Typography></li>
          </ul>
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
    <CardWrapper>
         <CardContainer 
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
         >
        <TopContainer>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
              whileHover={{translateY:-50}}
            >
              <img src={sell} />
            </Shoes>
          </ShoesWrapper>
        </TopContainer>
        <BottomContainer>
        <Typography variant="h4" style={{marginLeft:100}}>Sell</Typography>
        <Typography style={{textAlign:"center", fontSize:12}}>(Drag me)</Typography>
          <ul style={{listStyleType:"none", marginTop: 10, marginLeft:20, color:"#f7f5f5" }}>
            <li><Typography variant="caption text">Instant Re-selling</Typography></li>
            <li><Typography variant="caption text">Sell books within 24 hours</Typography></li>
            <li><Typography variant="caption text">FREE Pickup</Typography></li>
            <li><Typography variant="caption text">Get instant payment</Typography></li>
          </ul>
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
    </Box>
        </Box>
    )
}

export default Services;
