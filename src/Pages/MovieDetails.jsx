
import "./MovieDetails.css"

import movie from "./movie.json"

const MovieDetails = () => {

  const imageUrl = "https://image.tmdb.org/t/p/w300"+ movie.backdrop_path
    return (
      <div className="MovieDetails">
         <img src={imageUrl} alt={movie.title}/>
        <p>{movie.title}</p>
      </div>
    )
  }
  
  export default MovieDetails