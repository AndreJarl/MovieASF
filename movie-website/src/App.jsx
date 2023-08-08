import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

 
  useEffect(() => {
    fetchdata();
  },[]);


  const url = "https://api.consumet.org/manga/mangadex/info/259dfd8a-f06a-4825-8fa6-a2dcd7274230";
  const fetchdata = async () => {
   try {
   const { data } = await axios.get(url);
   setMovies(data)
   } catch (err) {
   throw new Error(err.message);
   }
  };
  
  console.log(movies);
  

  return (
    <>
     
    </>
  );
}

export default App;
