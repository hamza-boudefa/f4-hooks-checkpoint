import { useState } from 'react';
import './App.css';
import AddMovie from './Componenets/AddMovie';
import MovieList from './Componenets/MovieList';
import NavBar from './Componenets/NavBar';
import {Data} from './Data'
function App() {
const [movie, setMovie] = useState(Data)
const [search, setSearch] = useState("")
const [rate,setRate] = useState(0)

const handleSearch=(e)=>{
setSearch(e.target.value)
}
const handleRate=(e)=>{
  setRate(e)
  console.log(rate)
}

// add mevie function
const add=(newMovie)=>{
  setMovie([...movie,newMovie])
  console.log(movie)
}

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} handleRate={handleRate}  />
    <MovieList movies={movie} search={search} rate={rate}  />
    <AddMovie add={add} />
    </div>
  );
}

export default App;
