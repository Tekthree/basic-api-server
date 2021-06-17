'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const NODE_ENV = process.env.NODE_ENV;

const { Sequelize, DataTypes} = require('sequelize');
const dogModel = require('./dogs.js');
const songsModel = require('./songs.js');


let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}: {});


const dogs = dogModel(sequelize, DataTypes);
const songs = songsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize, 
  dogs: dogs,
  songs: songs
}