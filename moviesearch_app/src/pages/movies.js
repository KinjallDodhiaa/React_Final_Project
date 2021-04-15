<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { getResults } from '../api';
>>>>>>> main

const Movies = (props) => {

    // const [movies,setMovies] = useState([]);
    // const searchValue = 'action';
    // useEffect(() => {
    //     fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`)
    //         .then(response => response.json())
    //         .then(data=>setMovies(data))     
    // }, []) 
    // console.log(movies);

<<<<<<< HEAD
    const [content, setContent] = useState([])

    return (
        <div>
            <h1>This is movie page</h1>
        </div>
    );
=======
    


    return null;
>>>>>>> main
};

const mapStateToProps =(state)=>{
return{
    data: state.results
}
}


export default connect(mapStateToProps)(Movies);