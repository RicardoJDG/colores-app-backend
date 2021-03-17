const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
require('dotenv/config');

require('./database');

//MIDDLEWARE
/*==========*/
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//IMPORTING ROUTES
const getRoutes = require('./routes/gets');
const postRoutes = require('./routes/posts');

//ROUTES
/*=====*/
app.use('/colores', getRoutes);
app.use('/colores', postRoutes);

//Listening
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})