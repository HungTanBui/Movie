import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './index.scss';

// import required modules
import { Navigation } from 'swiper/modules';
import MovieCard from '../movide-card';
import axios from 'axios';

export default function Carousel({heading, url}) {

  // danh sách phim ==> data type => array =? []
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    /// hành động lấy danh sách movie lên
    const respone =  await 
        axios.get(
          url
        );

        console.log(respone.data.results);
        setMovies(respone.data.results);
  }

  

  // chạy function khi load trang
  useEffect( () => {
    fetchMovie();
  }, []);

  return (
    <div className="carousel">
      <h2>{heading}</h2>
      <Swiper navigation={true} modules={[Navigation]}  slidesPerView={4} spaceBetween={10}>
        {movies.map(movie => <SwiperSlide> <MovieCard 
            id = {movie.id}
            name={movie.title ? movie.title : movie.name} 
            description={movie.release_date ? movie.release_date : movie.first_air_date} 
            img={movie.poster_path}/> </SwiperSlide>)}
        


      </Swiper>
    </div>
  );
}