import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Search() {

    const {query} = useParams();
   
    const [movies, setMovies] = useState(null);
    
    useEffect(()=>{
      const url = `https://api.themoviedb.org/3/search/multi?query=${query}include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpzrrzlL_IEwa7uovSoSWI_8fwByw8FbP0aCbMk_2Y0'
        }
      };
      axios.get(url, options)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [query]);
  
    console.log(query);
    console.log(movies);

    if(movies === null){
       return (
          <div>
               <p className='text-black text-6xl'>NO RESULTS</p>
          </div>
        )
    }

  return (
       <div>
    <div className='grid grid-cols-2 gap-5 px-5  justify-center md:px-20 lg:grid lg:grid-cols-5 lg:px-28'>
      {movies.map((movie)=>(
            <MovieCard key={movie.id} movies={movie}/>
        ))}
        </div>
        </div>
  )
}

export default Search