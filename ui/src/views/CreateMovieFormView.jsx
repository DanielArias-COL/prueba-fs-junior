import React, { useState } from 'react';
import { createMovie } from '../services/createMovie';
import { useNavigate } from 'react-router-dom';  
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/formstyle.css';

export const CreateMovieFormView = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    year: '',
    genre: '',
    synopsis: '',
    cast: '',
    image: '',
  });

  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedMovieData = {
      ...movieData,
      cast: movieData.cast.split(',').map(actor => actor.trim()), 
      year: parseInt(movieData.year, 10), 
    };

    try {
      const response = await createMovie(updatedMovieData);
      alert(`Película creada exitosamente: ${response.title}`);
      
      navigate('/');  
    } catch (error) {
      alert(`Error al crear la película: ${error.response?.data || error.message}`);
    }
  };

  return (
    <>
      <Header />

      <div className="form">
        <h2 className="form__title">Add movie</h2>
        <form className="form__form" onSubmit={handleSubmit}>
          <div className="form__input-container">
              <label htmlFor="name"> Título:
                  <input id="name" type="text" name="title" value={movieData.title} onChange={handleChange} required />
              </label>
          </div>
          <div className="form__input-container">
              <label htmlFor="anio"> Año: 
                <input 
                  id="anio"
                  type="number" 
                  name="year" 
                  value={movieData.year} 
                  onChange={handleChange} 
                  required 
                  min="1900" 
                  max={new Date().getFullYear()} 
                />
              </label>
          </div>
          <div className="form__input-container">
              <label htmlFor="genero"> Género: 
                <input id="genero" type="text" name="genre" value={movieData.genre} onChange={handleChange} required />
              </label>
          </div>
          <div className="form__input-container">
              <label>Sinopsis:
                <textarea 
                name="synopsis" 
                value={movieData.synopsis} 
                onChange={handleChange}
                required />
              </label>
          </div>
          <div className="form__input-container">
              <label>
                Reparto (separado por comas):
                <input 
                  type="text" 
                  name="cast" 
                  value={movieData.cast} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ejemplo: Matthew McConaughey, Anne Hathaway, Jessica Chastain" 
                />
              </label>
          </div>
          <div className="form__input-container">
            <label>
              Imagen (URL):
              <input type="text" name="image" value={movieData.image} onChange={handleChange} required />
            </label>
          </div>
          <div className="form__input-container">
              <input type="submit" value="Crear Película" />  
          </div>
        </form>
      </div>

      <Footer/>
    </>
  );
};
