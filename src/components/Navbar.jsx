import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core";
import { Box, AppBar, Toolbar, IconButton, Button, Typography, Drawer, ListItem, List } from "@mui/material";
import './boxes.module.css'
import logo from '../images/logoN-removebg-preview.png';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(theme=>({
  components:{
      marginLeft: "12%",
      lineHeight:0,
      textDecoration: 'none',
      color: "#ffffff"
  }, 
  list:{
      width: 250
  },
  button:{
    [theme.breakpoints.down('sm')]:{
      display: "none"
  }
  },
  menuButton:{
      display:"none",
      [theme.breakpoints.down('sm')]:{
          display: "block"
      }
  }
}));


const Navbar =()=>{
  const classes = useStyles();
  const [open, setOpen] = useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

  const list=()=>{
    return(
    <Box className={classes.list} >
        <List>
            <ListItem>
               <Box style={{display:"flex", flexDirection:"column"}}>
               <Button color="inherit">About&nbsp;Us</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Login</Button>
               </Box>
            </ListItem>
        </List>
    </Box>
    )
}

    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background:"#f7f5f5", color:"#000000"}} >
        <Toolbar>
        <IconButton
                color="inherit"
                onClick={handleOpen}
                className={classes.menuButton}
                >
                <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={handleClose} onClick={handleClose}>
              {list()}
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} style={{marginLeft:50, width:130, height:50}}/>
          </Typography>
          <Box className={classes.button}>
          <Button color="inherit">About&nbsp;Us</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar;