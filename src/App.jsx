import React from 'react'
import Home from './components/pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './components/pages/movie-detail';
import 'react-circular-progressbar/dist/styles.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "movie-detail/:movieId",
      element: <MovieDetail/>,
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
