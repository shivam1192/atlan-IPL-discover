import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: '#F4A950',
    height: '219px',
    backgroundColor: '#F4A950',
    marginTop: '90px',
  },
  text2 :{
      fontSize:"41px",
      fontFamily:"cursive",
      color: '#161b21'
  },
}));

const MatchesInfo = () =>{
    const history = useHistory();
  const classes = useStyles();
    const helloworld1 =()=>{
        history.push("/playersinfo");
    }
    const helloworld2 =()=>{
        history.push("/teamwisestatistic");
    }
    const helloworld3 =()=>{
        history.push("/matchesinformation");
    }
    return(
        <div>
            <Container>
             <div className={classes.root}>
                <Grid container direction="row" spacing={6} >
                <Grid item md={4} xs={12} onClick={helloworld1}>
                  <Paper className={classes.paper}><span className={classes.text2}>Players<br/>Information</span></Paper>
                  </Grid>
                  <Grid item md={4} xs={12} onClick={helloworld2}>
                  <Paper className={classes.paper}><span className={classes.text2}>TeamWise<br/>Statistic</span></Paper>
                  </Grid>
                  <Grid item md={4} xs={12} onClick={helloworld3}>
                  <Paper className={classes.paper}><span className={classes.text2}>Matches<br/>Information</span></Paper>
                  </Grid>
                  </Grid>
            </div>
            </Container>
        </div>
    )
}
export default MatchesInfo;
