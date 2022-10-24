import React from 'react'
import { Container, Form, FormControl, Navbar } from 'react-bootstrap'
import ReactStars from 'react-stars'

const NavBar = ({handleSearch, handleRate}) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            NetFlix (balouchi)
          </Navbar.Brand>
          <ReactStars
  count={5}
  size={24}
  onChange={handleRate}
  color2={'#ffd700'} />
          <FormControl id='search' onChange={(e)=>handleSearch(e)} />
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar