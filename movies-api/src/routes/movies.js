const express = require('express');
const router = express.Router();
const { getMovies, getMovieById, createMovie } = require('../controllers/moviesController');

router.post('/', createMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);

module.exports = router;
