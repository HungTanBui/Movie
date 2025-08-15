import React from 'react'
import Header from '../../header'
import HeroSection from '../../hero-section'
import Carosuel from '../../carosuel'

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Carosuel heading="Trending" url = "https://api.themoviedb.org/3/trending/all/week?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US" />
      <Carosuel heading="Comedy Movies" url = "https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=35" />
      <Carosuel heading="Top Rated" url = "https://api.themoviedb.org/3/movie/top_rated?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US"/> 
      <Carosuel heading="Action Movies" url = "https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=28"/> 
      <Carosuel heading="Horror Movies" url = "https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=27"/> 
      <Carosuel heading="Romantic Movies" url = "https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=10749"/>
    </div>
  )
}

export default Home
