import React,{useContext, useState} from 'react';
import { PlayerDataContext } from '../Context/PlayerDataContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import TableComponent from './TableComponent';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: '#F4A950',
    height: '70px',
    backgroundColor: '#F4A950',
  },
  text2 :{
      fontSize:"15px",
      fontFamily:"cursive",
      fontWeight:"bold",
      color: '#161b21'
  },
  text1:{
    fontWeight:"100",
  }
}));
const columns = [
    { field: 'DOB', headerName: 'DOB', width: 250},
    { field: 'Country', headerName: 'Country', width: 250 },
    { field: 'Player_Name', headerName: 'Player Name', width: 250 },
    { field: 'Batting_Hand', headerName: 'Batting Hand', width: 250 },
    { field: 'Bowling_Skill', headerName: 'Bowling_Skill', width: 220 },
  ]; 
const PlayerInfo = () =>{
  const classes = useStyles();
    const {Playerdata,setPlayerData,data,setData} = useContext(PlayerDataContext)
    Playerdata.map(function (element) {
        element.id = Math.random();
      });
    return(
        <>
        <Container>
             <div className={classes.root}>
                <Grid container direction="row" spacing={6} >
                <Grid item md={3} xs={6}>
                  <Paper className={classes.paper}><span className={classes.text2}>Highest Strike rate: {data[0].maxstrike}<br/><span className={classes.text1}>{data[0].name}</span></span></Paper>
                  </Grid>
                  <Grid item md={3} xs={6}>
                  <Paper className={classes.paper}><span className={classes.text2}>Highest Average: {data[1].maxavg}<br/><span className={classes.text1}>{data[1].name}</span></span></Paper>
                  </Grid>
                  <Grid item md={3} xs={6}>
                  <Paper className={classes.paper}><span className={classes.text2}>Maximum Out: {data[2].maxout}<br/><span className={classes.text1}>{data[2].name}</span></span></Paper>
                  </Grid>
                  <Grid item md={3} xs={6}>
                  <Paper className={classes.paper}><span className={classes.text2}>Maximum Run: {data[3].maxrun}<br/><span className={classes.text1}>{data[3].name}</span></span></Paper>
                  </Grid>
                  </Grid>
            </div>
            </Container><br/><br/>
          <TableComponent columns={columns} rows={Playerdata}/>
        </>
    )
}
export default PlayerInfo;
