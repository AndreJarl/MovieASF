import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = "https://api.themoviedb.org/3/movie/popular?api_key=011f0f826110309514b3e9231867614e";

function MovieCard() {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
       fetchData();
    },[])

     const fetchData = async () => {
        try{
           const {data} = await axios.get(url);
           const slice = data.results.splice(0, 10)
           setMovies(slice);
        }
        catch (err){
          throw new Error(err.message);
        }
    }

    console.log(movies);

  return (
    <>
    <div className=' bg-black py-10'>
    <p className='text-yellow-400 text-center pb-10 text-5xl font-bold '>Popular Movies</p>
    <div className='grid grid-cols-2 gap-5 px-5  justify-center lg:grid lg:grid-cols-5 lg:px-28'>
   
     {movies.map((movie)=>(
             <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
               {/* <p className='w-full text-white  overflow-ellipsis  line-clamp-2'>  {movie.title}</p> */}
             </div>
        ))}
        </div>
        </div>
</>

  )
}

export default MovieCard