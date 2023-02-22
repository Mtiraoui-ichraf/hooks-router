import './App.css';
import MovieList from './components/MovieList/MovieList';
import { useState } from 'react';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [keyWords, setKeyWords] = useState('')

  const [rating, setRating] = useState(1)

  const [AllMovies, setAllMovies] = useState([
    {id: uuidv4(), title : "Mercredi" , description : "description01" , rate : 3 , image : "https://www.nouveautes-tele.com/wp-content/uploads/2022/10/mercredi.jpg" },
    {id: uuidv4(), title : "Take Down" , description : "description02" , rate : 2 , image  : "https://www.essentialhomme.fr/wp-content/uploads/2022/05/Netflix-Les-Films-en-Mai-2022-The-Takedown.jpg" },
    {id: uuidv4(), title : "The New York Times" , description : "description03" , rate : 5 , image  : "https://static01.nyt.com/images/2022/02/03/business/03economy-briefing-netflix-01/03economy-briefing-netflix-01-superJumbo.jpg" }
  ]);

const addNewMovie = (newMovie) => {
setAllMovies ([...AllMovies, newMovie])
}

const searchMov = (text) => {
setKeyWords(text)
}

const rateMov = (num) => {
  setRating(num)
  }
  
const deletedMov = (id) => {
  const filtredMov = AllMovies.filter(elm => elm.id !== id)
  setAllMovies(filtredMov)
  }

  const updateMov = (id, data) => {
    const updMov = AllMovies.map(elm => elm.id === id ? {...elm, title:data} : elm)
    setAllMovies(updMov)
    }

  return (
    <div className="App">
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      <Filter searchMov={searchMov} rateMov= {rateMov}></Filter>
      <MovieList updateMov={updateMov} deletedMov={deletedMov} AllMovies={AllMovies.filter(elm => elm.title.toLowerCase().includes(keyWords.toLowerCase().trim()) && elm.rate >= rating)}></MovieList>
    </div>
  );
}

export default App;
