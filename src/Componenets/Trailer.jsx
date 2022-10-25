import React from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'
const Trailer = ({movies}) => {
    const {id,dd}=useParams()
    
    const movie= movies.find((el)=>el.id==id)
  return (
    <div>
        <Iframe width='1000' height='600' src={movie.trailer} > </Iframe>
    </div>
  )
}

export default Trailer