import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";

const MovieDetail = () => {

  const {id}= useParams();
  const [movie, setMovie] = useState({});

  async function getMovie(){

    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  },[])
  
 

  return (
    <section className="MovieDetails">
      <div className="MovieDetails__container">
        <div className="MovieDetails__col">
          <h1 className="MovieDetails__title">{movie.title}</h1>
          <div className="MovieDetails__image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="MovieDetails__col">
          <div className="MovieDetails__details">
            <div className="MovieDetails__detail">
              <span>Budget:</span> {movie.budget}
            </div>
            <div className="MovieDetails__detail">
              <span>Original language:</span> {movie.original_language}
            </div>
            <div className="MovieDetails__detail">
              <span>Popularity:</span> {movie.popularity}
            </div>
            <div className="MovieDetails__detail">
              <span>Overview:</span> {movie.overview}
            </div>
          </div>
          <Link to={"/"} className="MovieDetails__button">
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
