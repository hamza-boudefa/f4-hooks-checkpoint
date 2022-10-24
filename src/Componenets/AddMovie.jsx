import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap'

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // add new movie
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(0)
    const [discription, setDiscription] = useState("")
    const [poster, setPoster] = useState("")
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
const handleRate=(e)=>{
    setRate(e.target.value)
}
const handeDisc=(e)=>{
    setDiscription(e.target.value)
}
const handlePoster=(e)=>{
    setPoster(e.target.value)
}


    
    const addNewMovie=()=>{
        let newMovie={
            title:title,
            rate:rate,
            posterUrl:poster,
            description:discription
        }
        add(newMovie)
    }

    return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        title 
        <FormControl onChange={(e)=>handleTitle(e)} />
        rate
        <FormControl onChange={(e)=>handleRate(e)} />
        description
        <FormControl onChange={(e)=>handeDisc(e)} />
        posterUrl
        <FormControl onChange={(e)=>handlePoster(e)}/>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie