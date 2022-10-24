import React from 'react'
import Movie from './Movie'

const MovieList = ({movies,search, rate}) => {
  return (
    <div className='aflem' >
{ movies.filter((elF)=>elF.rate >= rate && elF.title.toLowerCase().includes(search)).map((movie)=> <Movie movie={movie} /> ) }
    </div>
  )
}

export default MovieList