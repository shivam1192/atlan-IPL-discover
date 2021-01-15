import React,{useContext, useState} from 'react';
import { XGrid } from '@material-ui/x-grid';
import { PlayerDataContext } from '../Context/PlayerDataContext';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
  text:{
    color: '#161b21',
    fontFamily: 'cursive',
    fontSize:'19px',
  }
}));
const TableComponent = (props) =>{
  const classes = useStyles();
    return(
        <>
        <Container style={{color:'white'}}>
        <div style={{ height: 500, width: '100%',backgroundColor:'#F4A950'}}>
        <XGrid 
        rows={props.rows} 
        columns={props.columns}
        pagination
        showToolbar
        disableColumnMenu
        pageSize={6}
        className={classes.text}
      />
         </div>
         </Container>
        </>
    )
}
export default TableComponent;
