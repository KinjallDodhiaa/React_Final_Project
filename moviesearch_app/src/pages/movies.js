import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { getResults } from '../api';

const Movies = (props) => {

    // const [movies,setMovies] = useState([]);
    // const searchValue = 'action';
    // useEffect(() => {
    //     fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`)
    //         .then(response => response.json())
    //         .then(data=>setMovies(data))     
    // }, []) 
    // console.log(movies);

    


    return null;
};

const mapStateToProps =(state)=>{
return{
    data: state.results
}
}


export default connect(mapStateToProps)(Movies);