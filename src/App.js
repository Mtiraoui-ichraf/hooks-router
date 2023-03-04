import './App.css';
import MovieList from './components/MovieList/MovieList';
import { useState } from 'react';
import AddMovie from './components/AddMovie/AddMovie';
import Filter from './components/Filtre/Filter';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom';
import MovieDescription from './components/MovieDescription/MovieDescription';


function App() {

  const [keyWords, setKeyWords] = useState('')

  const [rating, setRating] = useState(1)

  const [AllMovies, setAllMovies] = useState([
    {id: uuidv4(), title : "Mercredi" , description : "Mercredi Addams est envoyée par ses parents, Gomez et Morticia, au sein de la Nevermore Academy, à Jericho dans le Vermont, après avoir été une nouvelle fois expulsée d'un lycéedescription01" , rate : 3 , image : "https://www.nouveautes-tele.com/wp-content/uploads/2022/10/mercredi.jpg", vid:"https://www.youtube.com/embed/X7UoGHx7MDI" },
    {id: uuidv4(), title : "Take Down" , description : "Lorsque Jack, un homme à tout faire de Londres, doit sauver sa fille, cela devient une course contre la montre pour tuer ou être tué" , rate : 2 , image  : "https://www.essentialhomme.fr/wp-content/uploads/2022/05/Netflix-Les-Films-en-Mai-2022-The-Takedown.jpg", vid:"https://www.youtube.com/embed/iReeddMo_ao" },
    {id: uuidv4(), title : "Triple Frontière" , description : "D'anciens soldats des forces spéciales peinant à joindre les deux bouts se réunissent pour préparer un coup risqué : piller un baron de la drogue sud-américain. Critique : Triple Frontière est de ces projets qui ne semblent jamais parvenir à trouver le chemin de nos (petits et grands) écrans" , rate : 5 , image  : "https://game-lord.com/uploads/news/2019/11/5dd17c9aca7e7_triplefrontier.jpg",vid:"https://www.youtube.com/embed/Fo3yRLLrXQA" },
    {id: uuidv4(), title : "Arrow" , description : "Après un violent naufrage, le jeune milliardaire et playboy Oliver Queen, porté disparu et présumé mort depuis cinq ans, est découvert vivant sur une île isolée dans la mer de Chine" , rate : 5 , image : "https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_.jpg",vid:"https://www.youtube.com/embed/X7UoGHx7MDI" },
    {id: uuidv4(), title : "Les 100" , description : "Près de 100 ans après l'apocalypse nucléaire, 100 jeunes exilés d'une station spatiale en péril sont envoyés sur Terre pour voir si la planète est maintenant habitable" , rate : 4 , image  : "https://i.pinimg.com/550x/76/25/49/7625492e663fd405b8eebd7c2d3983c5.jpg" },
    {id: uuidv4(), title : "La Reine du Sud" , description : "Après le meurtre de son petit ami à Mexico, Teresa Mendoza part se réfugier aux Etats-Unis, où ellle finit par rejoindre les rangs du cartel responsable de la mort de l'homme qu'elle aimait. Elle devra alors s'en remettre à son instinct, à une fidèle amie, et à un mystérieux carnet pour survivre et se venger" , rate : 5 , image  : "https://images.critictoo.com/wp-content/uploads/2020/07/La-Reine-du-Sud-Saison-2-Kate-Del-Castillo.jpg",vid:"https://www.youtube.com/embed/X7UoGHx7MDI" },
    {id: uuidv4(), title : "AltaMar" , description : "Sur un paquebot de luxe reliant l'Espagne au Brésil dans les années 1940, deux sœurs découvrent de troublants secrets de famille après une série de morts mystérieuses. Regardez autant que vous voulez. Par les créateurs de Grand Hôtel et Les demoiselles du téléphone" , rate : 3 , image : "https://www.moviemeter.nl/series/images/photo/4000/4561.jpg?cb=1555613878",vid:"https://www.youtube.com/embed/X7UoGHx7MDI" },
    {id: uuidv4(), title : "Titans" , description : "Aux premiers temps du monde, les dieux de l'Olympe supplantèrent leurs créateurs, les Titans, grâce à l'aide du kraken créé par Hadès. Zeus, Poséidon et lui-même se partagèrent alors le monde, et Hadès, trompé par Zeus, fut relégué dans le monde souterrain" , rate : 2 , image  : "https://flxt.tmsimg.com/assets/p17179344_b_v13_aa.jpg",vid:"https://www.youtube.com/embed/X7UoGHx7MDI" },
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
      <Routes>
      <Route path='/' element={<div>
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      <Filter searchMov={searchMov} rateMov= {rateMov}></Filter>
      <MovieList updateMov={updateMov} deletedMov={deletedMov} AllMovies={AllMovies.filter(elm => elm.title.toLowerCase().includes(keyWords.toLowerCase().trim()) && elm.rate >= rating)}></MovieList>
      </div>} >
        </Route>
        <Route path='/MovieDescription/:id' element={ <MovieDescription AllMovies={AllMovies}></MovieDescription> } />
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
