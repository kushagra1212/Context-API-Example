import React,{useContext,useState} from 'react';
import { ourContext } from '../Provider';
const Addmovies=()=>
{
    
    const [movies,setmovies]=useContext(ourContext);
    
    const [naam,setnaam]=useState("");
    const [rating,setrating]=useState(0);
    const submithandle=()=>
    {
        
        setmovies([...movies,{name:naam,rating:rating}]);

    }
    const setname=(e)=>
    {
        setnaam(e.target.value);
    }
    const setrate=(e)=>
    {
        setrating(e.target.value);
    }
    return(<div>
        <div>

     <input placeholder="name of the movie" onChange={setname}/>
<input placeholder="rating of the movie" onChange={setrate}/>
    <button onClick={submithandle} > button</button>
        </div>
    </div>)

}
export default Addmovies;