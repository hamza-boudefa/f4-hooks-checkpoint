import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars'
const Movie = ({movie}) => {
  return (
    <div >
        <Card style={{ width: '18rem', height:'650px' }}>
      <Card.Img className='img' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title> {movie.title} </Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
        <ReactStars
        edit={false}
  count={5}
  value={movie.rate}
  size={24}
  color2={'#ffd700'} />
      </Card.Body>
    </Card>
    </div>
  )
}

export default Movie