const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
  console.log("llega la petición de crear pelicula");
  try {
    const { title, year, genre, synopsis, cast, image } = req.body;

    if (!title || !year || !genre || !synopsis || !cast || !image) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    console.log(req);
    const newMovie = await Movie.create({ title, year, genre, synopsis, cast, image });
    
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la película.', details: err.message });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({ attributes: ['id', 'title', 'year', 'genre', 'image'] });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener películas.', details: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada.' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener película.', details: err.message });
  }
};
