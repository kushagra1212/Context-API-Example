import React,{createContext,useState} from 'react';
export const ourContext=createContext();

export const Provider=(props)=>
{
    const [movies,setmovies]=useState([{
        name:"Doremon",
        rating:5
    },
    {
        name:"Sinchan",
        rating:4.5
    },
    {
        name:"Cartoon",
        rating:3
    }]);
    
    return (<div>

<ourContext.Provider value={[movies,setmovies]}>
            {props.children}
        </ourContext.Provider>
    </div>)
    

}