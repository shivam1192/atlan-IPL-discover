import React,{createContext,useState,useEffect} from 'react';

export const PlayerDataContext = createContext()

const PlayerDataContextProvider = (props) => {
    const [Playerdata,setPlayerData] = useState([])
    useEffect(()=>{
        const fun = async() => {
            fetch('https://s5.aconvert.com/convert/p3r68-cdx67/tthv2-agpr8.json')
            .then(response => response.json())
            .then(datas => setPlayerData(datas));
        }
        fun()
    })

    return ( 
        <PlayerDataContext.Provider value={{Playerdata,setPlayerData:setPlayerData}}>
           {props.children}
        </PlayerDataContext.Provider>
     );
}
 
export default PlayerDataContextProvider;
