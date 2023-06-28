import "./MovieCard.css"
import { Link } from "react-router-dom"


const MovieCard = ( props ) => {

    const {id, title, poster_path, backdrop_path} = props.datos
    
    const imageUrl = "https://image.tmdb.org/t/p/original"+ poster_path
    //const backimageUrl = "https://image.tmdb.org/t/p/w300"+ backdrop_path
    //<img src={backimageUrl} alt={title}/>
    return <div className="MovieCard">
        <Link to={"/movie/"+id}>
        <img src={imageUrl} alt={title}/>
        <p>{title}</p>
        </Link>
            
    </div>
}

//style={{ backgroundColor: colorSecundario  }}

export default MovieCard