import React,{useContext, useState} from 'react';
import { TeamDataContext } from '../Context/TeamStatisticDataContext';
import TableComponent from './TableComponent';
const columns = [
    { field: 'team', headerName: 'Team', width: 250},
    { field: 'away_wins', headerName: 'Away Wins', width: 125 },
    { field: 'home_wins', headerName: 'Home Wins', width: 125},
    { field: 'away_matches', headerName: 'Away Matches', width: 140 },
    { field: 'home_matches', headerName: 'Home Matches', width: 140},
    { field: 'away_win_percentage', headerName: 'Away Win Percentage', width: 250 },
    { field: 'home_win_percentage', headerName: 'Home Win Percentage', width: 200},
  ]; 
const TeamWiseStatistic = () =>{
    const {Teamdata,setTeamdata} = useContext(TeamDataContext)
    Teamdata.map(function (element) {
        element.id = Math.random();
      });
    return(
        <>
          <TableComponent columns={columns} rows={Teamdata}/>
        </>
    )
}
export default TeamWiseStatistic;

