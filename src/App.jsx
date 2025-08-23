import React from 'react'
import Home from './components/pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './components/pages/movie-detail';
import 'react-circular-progressbar/dist/styles.css';
import Demo from './components/pages/demo-responsive';
import SearchPage from './components/search';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "movie-detail/:movieId",
      element: <MovieDetail/>,
    },
    {
      path: "/search/:keyWord",
      element: <SearchPage/>,
    },
    {
      path: "demo",
      element: <Demo/>,
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
