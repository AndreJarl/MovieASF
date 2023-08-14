import React from 'react'
import cover from "../assets/movie.jpg"


function Hero() {
  return (
    <div className='h-[659px] pt-5  bg-hero-pattern bg-cover' >

          <div className='flex justify-center items-center bg-transparent h-20 text-white   '>
       <div className='flex  justify-center items-center overflow-hidden  gap-14 lg:gap-[600px]'>
             <div className='logo'> 
                   <p className='text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl cursor-pointer bg-gray-50 rounded-md px-2 py-2'>MOVIEASF</p>
             </div>
             <div className='flex items-center gap-4 font-medium text-sm sm:text-base sm:gap-4  text-yellow-400 lg:text-lg lg:gap-10'>
                 <p className='cursor-pointer'>Movies</p>
                 <p className='cursor-pointer'>TV Shows</p>
             </div>
       </div>

    </div>
        <div className='flex flex-col justify-center items-center pt-10 lg:pt-24'>
           <div className='flex flex-col text-center text-white text-3xl mx-2 gap-4  lg:text-5xl'>
                <p className='font-bold'><span className='text-yellow-400'>Cinematic </span>Bliss Awaits:</p>
                <p className='font-bold' >Stream the Magic, Feel the <span className='text-yellow-400'>Story</span>.</p>
                <p className='text-yellow-400 text-base '>Welcome to your streaming escape!</p>
           </div>
             <div className='mt-10 flex flex-col justify-center  gap-4 items-center lg:flex lg:flex-row lg:gap-0'>
                 <input className='lg:w-[300px] lg:h-10 px-4 py-2 outline-none rounded-s-sm' type="text" placeholder='Search......' />
                 <p className='bg-red-600 py-2 px-2  text-white font-medium rounded-e-sm cursor-pointer'>Search > </p>
             </div>
        </div>
    </div>
  )
}

export default Hero