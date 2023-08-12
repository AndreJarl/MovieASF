import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center items-center bg-gray-950 h-20 text-white pt-4 lg:pt-8 '>
       <div className='flex justify-center items-center gap-4 sm:gap-10 lg:gap-[600px]'>
             <div className='logo'> 
                   <p className='text-2xl font-bold text-red-600 sm:text-3xl lg:text-4xl'>MOVIEASF</p>
             </div>
             <div className='flex items-center gap-2 font-medium text-sm sm:text-base sm:gap-4  text-yellow-400 lg:text-lg lg:gap-10'>
                 <p>Movies</p>
                 <p>TV Shows</p>
             </div>
       </div>
    </div>
  )
}

export default Navbar