import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PopularTVShows from './components/PopularTVShow'
import PopularMovieCard from './components/PopularMovieCard'

function Home() {
  return (
    <>
   <Hero/>
   <PopularMovieCard/>
   <PopularTVShows/>
   <Footer/>
    </>
  )
}

export default Home