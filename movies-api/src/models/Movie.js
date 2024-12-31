const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Movie = sequelize.define('Movie', {
  title: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  genre: { type: DataTypes.STRING, allowNull: false },
  synopsis: { type: DataTypes.TEXT, allowNull: false },
  cast: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Movie;
