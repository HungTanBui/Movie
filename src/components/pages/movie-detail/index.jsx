import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./index.scss"
import Tags from '../../tags';

function MovieDetail() {

    // lấy cái slug ở trên url

    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);

    console.log(movieId);

    // thông qua API lấy movie detail

    const fetchMovieDetail = async () => {
        const respone = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`);
        setMovie(respone.data);
        console.log(respone.data);
    }

    // chạy khi load page

    useEffect(() => {
        fetchMovieDetail();
    },[movieId]);

  return (
    <div className="movie-detail">

      <div className="banner">

        <img className="bg-blur"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="" />

        <div className="contain">

          <div className="left">
            <img classNam
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" />
          </div>

          <div className="right">
            <h1>{movie?.title}</h1>
            <p>{movie?.tagline}</p>
            <Tags>abc</Tags>
          </div>

          <div className="circleRating">
              <CircularProgressbar
                value={movieDatail.vote_average}
                maxValue={10}
                text={movieDatail.vote_average?.toFixed(1)}
                styles={buildStyles({
                  pathColor:
                    movieDatail.vote_average < 5
                      ? "red"
                      : movieDatail.vote_average < 7
                      ? "orange"
                      : "green",
                })}
              />
            </div>
        </div>

        <div className="overlay"></div>
      </div>
    </div>
  )
}

export default MovieDetail

// Home -> bộ phim bất kỳ  -> movie detail
// movie detail
/*
  - Lấy ra cái id
  - Lấy data => backend trả về movide detail của phim đó
  - 
*/
