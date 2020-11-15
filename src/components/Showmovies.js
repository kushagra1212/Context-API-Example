import React,{useContext} from 'react';
import {Provider,ourContext} from '../Provider';
const Showmovies=()=>
{
    
    const [movies,setmovies]=useContext(ourContext);
    return(
        <div>
            {movies.map((movie,id)=>
    {
        return(
            
          <div id={id} styles={{position:"absolute",width:"50%",left:"30%"}}>
          <h3>{movie.name}</h3>
          <h2>{movie.rating}</h2>

      </div>
        )
    })}
        </div>
    )
}
export default Showmovies;