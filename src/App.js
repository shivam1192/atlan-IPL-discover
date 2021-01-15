import React from 'react'
import NavbarFun from './Components/NavbarComp'
import './index.css';
import PlayerInfo from './Components/PlayersInfo';
import TeamWiseStatistic from './Components/TeamWiseStatistic';
import MatchesInfo from './Components/MatchesInfo';
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
        <BrowserRouter>
        <NavbarFun/><br/>
        <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/playersinfo" component={PlayerInfo} exact />
                <Route path="/teamwisestatistic" component={TeamWiseStatistic} />
                <Route path="/matchesinformation" component={MatchesInfo} />
        </Switch>
        </BrowserRouter>
        </PlayerDataContextProvider>
        </MatchesDataContextProvider>
      </TeamDataContextProvider>
    </div>
  );
}

export default App;