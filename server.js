const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv/config');

require('./database');

//MIDDLEWARE
/*==========*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//IMPORTING ROUTES
const getRoutes = require('./routes/gets');
const postRoutes = require('./routes/posts');

//ROUTES
/*=====*/
app.use('/colores', getRoutes);
app.use('/colores', postRoutes);

app.get('/', (req, res) => {
  res.send('Try with /colores');
});

//Listening
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
