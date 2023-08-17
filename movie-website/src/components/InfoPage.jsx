import React from 'react'

function InfoPage({infos}) {
  return (
    
    <div key={infos.id}  className='flex flex-col py-5 px-5 justify-center items-center bg-black text-white' >
        <div className='flex justify-center'>
        <img className='w-80' src={`https://image.tmdb.org/t/p/w500/${infos.poster_path}`} alt="" />
        </div>
        <div>
            <div className='flex flex-col justify-center items-center mt-2'>
                <p className='text-2xl font-bold w-80'>{infos.title}</p>
                <div className='flex gap-3 mt-2 '>
                    {infos.genres.map((genre)=>(
                        <div className='border px-1.5 py-1 rounded-lg text-yellow-400 '>
                            {genre.name} 
                        </div>
                ))}
                </div>
                <p className='w-80 mt-3'>{infos.overview}</p>
                </div>
              
                <div className='run'>
                  <p>{infos.runtime}</p>
                  <p>{infos.vote_average}</p>
                  <p>{infos.release_date}</p>
                </div>
           
            
        </div>
    </div>
   
  )
}

export default InfoPage