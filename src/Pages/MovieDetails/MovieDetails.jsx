
import { useEffect, useState } from "react"
import "./MovieDetails.css"


import { useParams } from "react-router-dom"
import { get } from "../../utils/httpClient"

const MovieDetails = () => {

  const {movieId} = useParams();
 
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }
  // si me cambia el id entonces que se vuelva a ejecutar
 
  const imageUrl = "https://image.tmdb.org/t/p/original"+ movie.backdrop_path
  
    return (
      <div className="MovieDetails">
         <img src={imageUrl} alt={movie.title} />
        <p>{movie.title}</p>
        <p>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p>{movie.overview}</p>
      </div>
    )
  }
  
  export default MovieDetails