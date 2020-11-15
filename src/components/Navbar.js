import React,{useContext} from 'react';
import Addmovies from './Addmovies';
import {ourContext} from '../Provider';
const Navbar=()=>
{
    const [movies,setmovies]=useContext(ourContext);
    return(
        <div>
            <p> Its the navbar obviously</p>
            <h4>{movies.length}</h4>
           <Addmovies/>

        </div>
    )

}
export default Navbar;