import React from 'react'

function Hero() {
  return (
    <div className='h-[600px] bg-gray-950 pt-20 lg:pt-28'>
        <div className='flex flex-col justify-center items-center'>
           <div className='flex flex-col text-center text-white text-3xl mx-2 gap-4  lg:text-5xl'>
                <p className='font-bold'><span className='text-yellow-400'>Cinematic </span>Bliss Awaits:</p>
                <p className='font-bold' >Stream the Magic, Feel the <span className='text-yellow-400'>Story</span>.</p>
                <p className='text-yellow-400 text-base '>Welcome to your streaming escape!</p>
           </div>
             <div className='mt-10 flex justify-center items-center'>
                 <input className='lg:w-[500px] lg:h-10 px-2 outline-none rounded-s-sm' type="text" placeholder='Search......' />
                 <p className='bg-red-600 py-2 px-8 text-white font-medium rounded-e-sm'>Search > </p>
             </div>
        </div>
    </div>
  )
}

export default Hero