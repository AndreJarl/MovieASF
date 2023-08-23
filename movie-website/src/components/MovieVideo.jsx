import React from 'react'

function MovieVideo({id}) {
  return (
    <div> 
   
        <div className='flex justify-center items-center py-5'>
                <iframe
          className='w-4/5 aspect-video'
          src={`https://autoembed.to/movie/tmdb/${id}`}
          allowFullScreen  // Enable fullscreen mode
          allow="autoplay; fullscreen"  // Allow autoplay and fullscreen
        ></iframe>

        </div>
   
    </div>
  )
}

export default MovieVideo