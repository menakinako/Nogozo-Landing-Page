import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import styles from './boxes.module.css';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpeg';
import ReactCardFlip from 'react-card-flip';

const useStyles = makeStyles( theme=>({
  container:{
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down('sm')]:{
      display:"block",
   },
   [theme.breakpoints.between('sm','md')]:{
    display:"block",
    marginLeft: 200
 }
  },
  title:{
    textAlign:"center",
    color:"#6b075e"
  },
  image:{
      width:390,
      height:240,
      [theme.breakpoints.down('sm')]:{
        width:290,
        height:220,
     },
     [theme.breakpoints.between('sm','md')]:{
      width:360,
      height:230,
   }
  },
  name:{
    textAlign:"center",
    color:"#ffffff"
  }
}))


const Customers =()=>{
const classes=useStyles();
const [flip, setFlip]= useState(false);
const [flipSecond, setFlipSecond]= useState(false);
const [flipThird, setFlipThird]= useState(false);

  useEffect(()=>{
    AOS.init({duration:2000})
    console.log("hello")
  })
    return(
        <Box style={{background:"#f7f5f5", width:"100%", overflow:"hidden"}}>
          <Typography variant="h3" style={{marginTop:70}} className={classes.title} data-aos="fade-right" data-aos-duration="1500">Our Customers</Typography>
          <Typography variant="h5" className={classes.title} data-aos="fade-left" data-aos-duration="1500">Listen from our Customers</Typography>
          <div className={classes.container}>
         
           <div className={styles.box} data-aos="zoom-in-right">
           <ReactCardFlip isFlipped={flip}  flipDirection="vertical">
             <Box onMouseEnter={()=>setFlip(!flip)}>
             <img src={pic1} className={classes.image}/>
             <Typography variant="h6" className={classes.name} >Arica Dsouza</Typography>
             </Box>
             <Box onMouseEnter={()=>setFlip(!flip)}>
               <Typography variant="caption" style={{color:"#f7f5f5"}}>"Lorem ipsum dolor sit amet. Ut similique veniam sit eaque iste ea ullam quibusdam. 33 vitae pariatur non soluta Quis et odit dignissimos sit animi earum et provident suscipit!<br/> Et sint dolore id dolorum quae eum molestias expedita est enim maiores.

33 aperiam quibusdam et officiis velit quo vero repellat a fugit officiis. Sed architecto reprehenderit ut impedit voluptas qui ipsa reprehenderit ut rerum blanditiis.<br/>
Aut error laudantium ex quibusdam ratione qui consequuntur fuga aut repellat quam. Et voluptatem quod et officia magni rem doloribus vitae et quaerat nemo eos saepe dolores!"</Typography>
             </Box>
             </ReactCardFlip>
           </div>
           
           <>
           <div className={styles.box} data-aos="zoom-out">
           <ReactCardFlip isFlipped={flipSecond}  flipDirection="vertical">
             <Box onMouseEnter={()=>setFlipSecond(!flipSecond)}>
             <img src={pic2} className={classes.image}/>
             <Typography variant="h6" className={classes.name} >Mansi Singh</Typography>
             </Box>
             <Box onMouseEnter={()=>setFlipSecond(!flipSecond)}>
               <Typography variant="caption" style={{color:"#f7f5f5"}}>"Lorem ipsum dolor sit amet. Ut similique veniam sit eaque iste ea ullam quibusdam. 33 vitae pariatur non soluta Quis et odit dignissimos sit animi earum et provident suscipit!<br/> Et sint dolore id dolorum quae eum molestias expedita est enim maiores.

33 aperiam quibusdam et officiis velit quo vero repellat a fugit officiis. Sed architecto reprehenderit ut impedit voluptas qui ipsa reprehenderit ut rerum blanditiis.<br/>
Aut error laudantium ex quibusdam ratione qui consequuntur fuga aut repellat quam. Et voluptatem quod et officia magni rem doloribus vitae et quaerat nemo eos saepe dolores!"</Typography>
             </Box>
             </ReactCardFlip>
           </div>
           </>
           <>
           <div className={styles.box} data-aos="zoom-in-left">
           <ReactCardFlip isFlipped={flipThird}  flipDirection="vertical">
             <Box onMouseEnter={()=>setFlipThird(!flipThird)}>
             <img src={pic3} className={classes.image}/>
             <Typography variant="h6" className={classes.name} >Rakesh Zindal</Typography>
             </Box>
             <Box onMouseEnter={()=>setFlipThird(!flipThird)}>
               <Typography variant="caption" style={{color:"#f7f5f5"}}>"Lorem ipsum dolor sit amet. Ut similique veniam sit eaque iste ea ullam quibusdam. 33 vitae pariatur non soluta Quis et odit dignissimos sit animi earum et provident suscipit!<br/> Et sint dolore id dolorum quae eum molestias expedita est enim maiores.

33 aperiam quibusdam et officiis velit quo vero repellat a fugit officiis. Sed architecto reprehenderit ut impedit voluptas qui ipsa reprehenderit ut rerum blanditiis.<br/>
Aut error laudantium ex quibusdam ratione qui consequuntur fuga aut repellat quam. Et voluptatem quod et officia magni rem doloribus vitae et quaerat nemo eos saepe dolores!"</Typography>
             </Box>
             </ReactCardFlip>
           </div>
           </>
          </div>
        </Box>
    )
}

export default Customers;