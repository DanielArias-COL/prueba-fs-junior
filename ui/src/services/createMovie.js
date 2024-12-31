import apiClient from './axios-config';

export const createMovie = async (movieData) => {
  try {
    const response = await apiClient.post('/movies', movieData); 
    console.log("sale con exito")
    return response.data; 
  } catch (error) {
    console.error('Error al crear la película:', error.response?.data || error.message);
    throw error; 
  }
};
