import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeView } from '../views/HomeView'
import { MovieDetails } from '../views/MovieDetailsView'
import {CreateMovieFormView} from '../views/CreateMovieFormView'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies/:id" element={<MovieDetails/>} />
        <Route path="/movies/create" element={<CreateMovieFormView/>} />
      </Routes>
    </BrowserRouter>
  )
}
