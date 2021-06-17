'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


//-------------------------- routes --------------------------------- //


router.get('/dogs', getAll);
router.get('/dogs/:dogsId', getOne);
router.post('/dogs', create);
router.put('/dogs/:dogsId', update);
router.delete('/dogs/:dogsId', remove);





//-------------------------- handlers --------------------------------- //


//---------get all-------//
async function getAll(req, res) {
  const alldogs = await data.dogs.findAll();
  res.status(200).send(alldogs);
}

//---------get one-------//
async function getOne(req,res) {
  const dogsId = req.params.dogsId;
  const dogs = await data.dogs.findOne({
    where: {
      id: dogsId
    }
  });
  res.status(200).send(dogs);
}

//---------create-------//
async function create(req, res) {
  const dogsObject = req.body;
  const dogsData = await data.dogs.create(dogsObject);
  res.status(200).send(dogsData);
}


//---------update-------//
async function update(req, res) {
  const dogsId = req.params.dogsId;
  const dogsObject = req.body;
  const dogsData = await data.dogs.findOne({where: { id: dogsId} });
  await dogsData.update(dogsObject);
  res.status(200).send(dogsData);
}

//---------delete-------//
async function remove(req, res) {
  const dogsId = req.params.dogsId;
  await data.dogs.destroy({ where: { id: dogsId }});
  res.status(204).send('Success');
}


module.exports = router;