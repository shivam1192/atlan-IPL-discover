import React,{lazy,Suspense} from 'react'
import NavbarFun from './Components/NavbarComp'
import './index.css';
const TeamWiseStatistic = React.lazy(() => import('./Components/TeamWiseStatistic'));
const MatchesInfo  = React.lazy(() => import('./Components/MatchesInfo'));
const PlayerInfo = React.lazy(() => import('./Components/PlayersInfo'));
import HomePage from './Components/HomePage';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import TeamDataContextProvider from './Context/TeamStatisticDataContext';
import MatchesDataContextProvider from './Context/MatchesDataContext';
import PlayerDataContextProvider from './Context/PlayerDataContext';


function App() {
  return (
    <div className="App">
      <TeamDataContextProvider>
        <MatchesDataContextProvider>
          <PlayerDataContextProvider>
          <Suspense fallback={<div style={{color:'white'}}>Loading...</div>}>
        <BrowserRouter>
         <NavbarFun/><br/><br/>
        <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/playersinfo" component={PlayerInfo} exact />
                <Route path="/teamwisestatistic" component={TeamWiseStatistic} />
                <Route path="/matchesinformation" component={MatchesInfo} />
        </Switch>
        </BrowserRouter>
        </Suspense>
        </PlayerDataContextProvider>
        </MatchesDataContextProvider>
      </TeamDataContextProvider>
    </div>
  );
}

export default App;
