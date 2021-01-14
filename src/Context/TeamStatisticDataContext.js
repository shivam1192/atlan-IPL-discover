import React,{createContext,useState,useEffect} from 'react';

export const TeamDataContext = createContext()

const TeamDataContextProvider = (props) => {
    const [Teamdata,setTeamData] = useState([])
    useEffect(()=>{
        const fun = async() => {
            fetch('https://jsonkeeper.com/b/BLXI')
            .then(response => response.json())
            .then(datas => setTeamData(datas));
        }
        fun()
    })

    return ( 
        <TeamDataContext.Provider value={{Teamdata,setTeamData:setTeamData}}>
           {props.children}
        </TeamDataContext.Provider>
     );
}
 
export default TeamDataContextProvider;
