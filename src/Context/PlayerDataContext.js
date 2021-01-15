import React,{createContext,useState,useEffect} from 'react';

export const PlayerDataContext = createContext()

const PlayerDataContextProvider = (props) => {
    const [Playerdata,setPlayerData] = useState([])
    const [data,setData] = useState([
        {maxstrike:0, name: ''},
        {maxavg:0, name: ''},
        {maxout:0, name: ''},
        {maxrun:0, name: ''},
    ])
    useEffect(()=>{
        const fun = async() => {
            fetch('https://api.npoint.io/7f7112fa7a1afa62fcd4')
            .then(response => response.json())
            .then(datas => setPlayerData(datas));
        }
        const fun2 = async() => {
            fetch('https://api.npoint.io/21712c29c8bb6e2e08d5')
            .then(response => response.json())
            .then(datas => {
                const maxrun = datas.reduce(function(prev, current) {
                    return (prev.total_runs > current.total_runs) ? prev : current
                }) 
                const maxout = datas.reduce(function(prev, current) {
                    return (prev.out > current.out) ? prev : current
                }) 
                const maxstrike = datas.reduce(function(prev, current) {
                    return (prev.strikerate > current.strikerate) ? prev : current
                }) 
                const maxavg = datas.reduce(function(prev, current) {
                    return (prev.average > current.average) ? prev : current
                }) 
                setData([
                    {maxstrike:maxstrike.strikerate, name: maxstrike.batsman},
                    {maxavg:maxavg.average, name: maxavg.batsman},
                    {maxout:maxout.out, name: maxout.batsman},
                    {maxrun:maxrun.total_runs, name: maxrun.batsman},
                ])
            });
        }
        fun()
        fun2()
    },[])
    return ( 
        <PlayerDataContext.Provider value={{Playerdata,setPlayerData:setPlayerData,data,setData:setData}}>
           {props.children}
        </PlayerDataContext.Provider>
     );
}
 
export default PlayerDataContextProvider;
