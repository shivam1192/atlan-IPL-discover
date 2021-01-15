import React,{useContext} from 'react';
import { MatchesDataContext } from '../Context/MatchesDataContext';
import TableComponent from './TableComponent';

const columns = [
    { field: 'Season', headerName: 'Season', width: 120},
    { field: 'city', headerName: 'City', width: 120},
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'team1', headerName: 'Team 1', width: 250},
    { field: 'team2', headerName: 'Team 2', width: 250 },
    { field: 'venue', headerName: 'Venue', width: 250 },
    { field: 'winner', headerName: 'Winner', width: 200},
    { field: 'toss_winner', headerName: 'Toss Winner', width: 200},
    { field: 'toss_decision', headerName: 'toss Decision', width: 120},
    { field: 'win_by_runs', headerName: 'Win By Runs', width: 120},
    { field: 'player_of_match', headerName: 'Player of Match', width: 180},
    { field: 'win_by_wickets', headerName: 'Win By Wickets', width: 120},
  ]; 
const MatchesInfo = () =>{
    const {Matchesdata,setMatchesData} = useContext(MatchesDataContext)
    return(
        <>
          <TableComponent columns={columns} rows={Matchesdata}/>
        </>
    )
}
export default MatchesInfo;
