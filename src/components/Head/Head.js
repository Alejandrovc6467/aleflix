import "./Head.css"
import MovieCard from "../../components/MovieCard/MovieCard"
import { get } from "../../utils/httpClient"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Head = ( props ) => {

  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

    return (
      <div className="head">
       
        {movies.slice(4,5).map((movie) => <Link to={"/movie/"+movie.id} key={movie.id}>
          
          <img  src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt={movie.title}  /> 
          <div className="head_movie_info">
            <p>{movie.title}</p>
          </div>

        </Link> 
        )} 
      
      </div>
    )
}

export default Head