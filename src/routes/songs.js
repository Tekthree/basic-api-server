'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


//-------------------------- routes --------------------------------- //


router.get('/songs', getAll);
router.get('/songs/:songsId', getOne);
router.post('/songs', create);
router.put('/songs/:songsId', update);
router.delete('/songs/:songsId', remove);





//-------------------------- handlers --------------------------------- //


//---------get all-------//
async function getAll(req, res) {
  const allsongs = await data.songs.findAll();
  res.status(200).send(allsongs);
}

//---------get one-------//
async function getOne(req,res) {
  const songsId = req.params.songsId;
  const songs = await data.songs.findOne({
    where: {
      id: songsId
    }
  });
  res.status(200).send(songs);
}

//---------create-------//
async function create(req, res) {
  const songsObject = req.body;
  const songsData = await data.songs.create(songsObject);
  res.status(200).send(songsData);
}


//---------update-------//
async function update(req, res) {
  const songsId = req.params.dogsId;
  const songsObject = req.body;
  const songsData = await data.songs.findOne({where: { id: songsId} });
  await songsData.update(songsObject);
  res.status(200).send(songsData);
}

//---------delete-------//
async function remove(req, res) {
  const songsId = req.params.songsId;
  await data.songs.destroy({ where: { id: songsId }});
  res.status(204).send('Success');
}


module.exports = router;