import React,{createContext,useState,useEffect} from 'react';

export const MatchesDataContext = createContext()

const MatchesDataContextProvider = (props) => {
    const [Matchesdata,setMatchesData] = useState([])
    useEffect(()=>{
        const fun = async() => {
            fetch("https://jsonkeeper.com/b/91U3")
            .then(response => response.json())
            .then(datas => setMatchesData(datas));
        }
        fun()
    })

    return ( 
        <MatchesDataContext.Provider value={{Matchesdata,setMatchesData:setMatchesData}}>
           {props.children}
        </MatchesDataContext.Provider>
     );
}
 
export default MatchesDataContextProvider;
