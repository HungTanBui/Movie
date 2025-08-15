import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Tags from "../../tags";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

function MovieDetail() {
  // lấy cái slug ở trên url

  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  console.log(movieId);

  // thông qua API lấy movie detail

  const fetchMovieDetail = async () => {
    const respone = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setMovie(respone.data);
    console.log(respone.data);
  };

  // chạy khi load page

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  return (
    <div className="movie-detail">
      <div className="banner">
        <img
          className="bg-blur"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />

        <div className="contain">
          <div className="left">
            <img
              classNam
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt=""
            />
          </div>

          <div className="right">
            <h1>{movie?.title}</h1>
            <p className="tagline">{movie?.tagline}</p>
            {movie.genres?.map((genre) => (
              <Tags>{genre.name}</Tags>
            ))}

            <div className="circleRating">
              <CircularProgressbar
                value={movie.vote_average}
                maxValue={10}
                text={movie.vote_average?.toFixed(1)}
                styles={buildStyles({
                  pathColor:
                    movie.vote_average < 5
                      ? "red"
                      : movie.vote_average < 7
                      ? "orange"
                      : "green",
                })}
              />
            </div>

            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <div className="box">
              <div className="info">
                <span className="label">Status: </span>
                <span className="value">{movie.status}</span>
              </div>

              <div className="info">
                <span className="label">Release Date: </span>
                <span className="value">{movie.release_date}</span>
              </div>

              <div className="info">
                <span className="label">Runtime: </span>
                <span className="value">{movie.runtime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

// Home -> bộ phim bất kỳ  -> movie detail
// movie detail
/*
  - Lấy ra cái id
  - Lấy data => backend trả về movide detail của phim đó
  - 
*/
