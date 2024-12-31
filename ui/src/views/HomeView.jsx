import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import api from '../services/axios-config';
import Header from '../components/Header'; // Asegúrate de importar el Header
import Footer from '../components/Footer'; // Importa el Footer

export const HomeView = () => {
  const [movies, setMovies] = useState([]); // Lista de películas
  const [selectedMovie, setSelectedMovie] = useState(null); // Película seleccionada
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de errores

  // Función para cargar todas las películas
  const fetchMovies = async () => {
    try {
      const response = await api.get('/movies');
      setMovies(response.data);
    } catch (err) {
      setError('Error al cargar las películas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Función para cargar una película por su ID
  const fetchMovieById = async (id) => {
    try {
      const response = await api.get(`/movies/${id}`);
      setSelectedMovie(response.data); // Guarda los detalles de la película seleccionada
    } catch (err) {
      console.error('Error al cargar la película:', err);
    }
  };

  
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <p className="text-center text-white">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      
      <Header />

      <main className="min-h-screen mx-auto w-full container">
        <br />
        
        {selectedMovie && (
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg my-4">
            <h2 className="text-2xl font-bold">{selectedMovie.title}</h2>
            <p>{selectedMovie.synopsis}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white"
              onClick={() => setSelectedMovie(null)}
            >
              Cerrar
            </button>
          </div>
        )}

        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} onReadMore={fetchMovieById} />
          ))}
        </section>
      </main>
      <Footer/>    
    </>
  );
};
