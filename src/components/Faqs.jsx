import { useEffect } from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails, Box} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { makeStyles } from "@material-ui/core";

const usestyles =makeStyles(theme=>({
  container:{
    paddingTop:50,
    width: 1000,
     margin:"auto",
     [theme.breakpoints.down('sm')]:{
     width: 280
   }
  },
  wrapper:{
    height:450, background:"#f7f5f5", width:"100%",
    margin:"auto",
     [theme.breakpoints.down('sm')]:{
     height: 480,
     marginBottom:30
   }
  }
}))


const Faqs =()=>{
  const classes = usestyles();

  useEffect(()=>{
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration:2000});
      AOS.refreshHard();
      AOS.refresh()
  }, [])
    return(
        <div className={classes.wrapper}>
          <Typography variant="h3" style={{textAlign:"center", color:"#6b075e",paddingTop:70}} data-aos="fade-right" data-aos-duration="1000">Frequently Asked Question</Typography>
          <Box data-aos="fade-up" className={classes.container}>
           <Accordion style={{background:"#f7f5f5", boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">In which cities your services are available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{background:"#f7f5f5", boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" >As a novel reader, are there any membership charges for me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{background:"#f7f5f5", boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">How can I re-sell my books?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
        </div>
    )
}

export default Faqs;