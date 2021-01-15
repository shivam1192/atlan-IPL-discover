import React, { useContext,useState } from 'react';
import logo from '../assets/IPL-logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text:{
    color: '#F4A950',
    fontSize: '37px',
  },
  setup:{
    marginTop:"24px",
  },
}));

const NavbarFun = () =>{
  const classes = useStyles();
  const history = useHistory();
  const redirectToHome = () => {
    console.log("heleoeorjrd");
    history.push('/')
  }
    return(
            <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item md={2} xs={6}>
                   <div onClick={redirectToHome} style={{cursor:'pointer'}}><img src={logo} height="100"></img></div>
                  </Grid>
                  <Grid item md={6} xs={6} className={classes.setup}>
                        <span className={classes.text}>Discover</span>
                  </Grid>
                  </Grid>
            </div>
    )
}
export default NavbarFun;
