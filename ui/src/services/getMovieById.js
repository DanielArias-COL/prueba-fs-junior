import apiClient from './axios-config';

export const getMovieById = async (id) => {
  try {
    const response = await apiClient.get(`/movies/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error al obtener la película por ID:', error);
    throw error; 
  }
};
