'use strict';

const express = require('express');
const cors = require('cors');
const dogsRoutes = require('./routes/dogs.js');
const songsRoutes = require('./routes/songs.js');

const app = express();

app.use(cors());
app.use(express.json());


app.use(dogsRoutes);
app.use(songsRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  } 
}