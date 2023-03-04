import { Link, useParams } from 'react-router-dom'
import './MovieDescription.css'

const MovieDescription = ({AllMovies}) => {

    const {id} =useParams();
    const thisMovie = AllMovies.find(movie =>movie.id===id) 

    return (
        <div className="description_body">
          <div className='wrapper'>
            <div className="title">
              <h1>{thisMovie.title}</h1>
              <p className='desc'>{thisMovie.description}</p>
            </div>
            <iframe className='trailer' width="560" height="315" src={thisMovie.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Link to={'/'}>
            <div className='back_btn'><button><i>Back</i></button></div>
            </Link>
          </div>
        </div>
    )
}

export default MovieDescription