import "./MovieList.css"

import MovieCard from "../../components/MovieCard/MovieCard"


import { useEffect, useState } from "react"
import { get } from "../../utils/httpClient"


const MovieList = () => {

  const [movies, setMovies] = useState([]);

   
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

    return (
      <div className="MovieList">
        {movies.map((movie) => <MovieCard key={movie.id} datos={movie} /> )} 
      </div>
    )
}
  
export default MovieList

