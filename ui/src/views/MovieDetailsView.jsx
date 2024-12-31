import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../services/getMovieById';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../styles/detailstyle.css';

export const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (err) {
        setError('No se pudo cargar la película.');
      }
    };

    fetchMovie();
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!movie) return <p className="text-center text-white">Cargando...</p>;

  console.log(movie);

  return (
    <>
      
      <Header />

      <div className="containerdetail container mx-auto p-4">
        <div className="flex flex-col md:flex-row bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          
          <img
            src={movie.image}
            alt={`Poster de ${movie.title}`}
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-2">
              <strong>Synopsis:</strong> {movie.synopsis}
            </p>
            <p className="mb-2">
              <strong>Cast:</strong> {movie.cast.join(', ')}
            </p>
            <p className="mb-2">
              <strong>Year:</strong> {movie.year}
            </p>
            <p className="mb-2">
              <strong>Gender:</strong> {movie.genre}
            </p>
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => window.history.back()}
        >
          Volver
        </button>
      </div>

      <Footer />
    </>
  );
};
