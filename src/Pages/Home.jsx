import "./Home.css"

import movies from "../movies.json"
import MovieCard from "../components/MovieCard/MovieCard"


const Home = () => {

    return (
      <div className="home">
       {movies.map((movie) => <MovieCard key={movie.id} datos={movie} /> )} 
      </div>
    )
  }
  
export default Home


/*
filtro que necesito para traer mis peliculas por categorias

 {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColorEquipo={actualizarColorEquipo}  actualizarFavorito={actualizarFavorito} />)}  

*/
  