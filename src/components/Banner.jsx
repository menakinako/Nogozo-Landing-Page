
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Animator,batch,Fade,FadeIn,Move,MoveIn,
         MoveOut,ScrollContainer,ScrollPage,Sticky,StickyIn,ZoomIn } from 'react-scroll-motion';
import About from "./About";
import SvgAnimation from "./SvgAnimation";

   const useStyle = makeStyles({
       container:{
             width:"100%", 
             zIndex:6,
             color:"#ffffff"
        }
   })      
         
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const Banner =()=>{
    const classes = useStyle();
    return(
        <Box>
        <Box className={classes.container}>
        <ScrollContainer snap="mandatory">
        <ScrollPage page={0}>
        <SvgAnimation />
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Typography variant="h4" style={{marginTop:300, color:"#f7f5f5", fontWeight:600}}>Welcome to apna wala E-Bazaar</Typography>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <Typography variant="h5" style={{color:"#ffad15"}}>Nogozo ✨</Typography>
        </Animator>
      </ScrollPage>
      <Typography variant="h5" style={{marginTop:-250,marginBottom:50, color:"#f7f5f5", fontWeight:600, textAlign:"center"}}>Buy Rent Sell Books starting from ₹10 with FREE Home Delivery</Typography>
      <About />
      </ScrollContainer>
      </Box>
      </Box>
    )
}

export default Banner;