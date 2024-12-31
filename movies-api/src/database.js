const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Heropro.12', {
  host: 'localhost',
  dialect: 'postgres', 
});

module.exports = sequelize;
