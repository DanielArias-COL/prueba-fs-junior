const sequelize = require('./database');
const Movie = require('./models/Movie');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moviesRoutes = require('./routes/movies');
const app = express();
const PORT = 3000;


sequelize.authenticate()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

sequelize.sync({ force: false }) 
  .then(() => console.log('Modelos sincronizados'))
  .catch(err => console.error('Error al sincronizar modelos:', err));


app.use(cors());
app.use(bodyParser.json());
app.use('/movies', moviesRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
