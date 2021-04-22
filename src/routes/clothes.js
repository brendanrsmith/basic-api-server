'use strict';

const express = require('express');

// pull in clothes model, instantiate 
const Cloth = require('../models/clothes');
const clothes = new Cloth();

// start new express Router application
const router = express.Router();

// RESTful routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getCloth);
router.post('/clothes', createCloth);
router.put('/clothes/:id', updateCloth);
router.delete('/clothes/:id', deleteCloth);

// RESTful route handlers
function getClothes(req, res) {
  let getAllClothes = clothes.read();
  res.status(200).json(getAllClothes);
}

function getCloth(req, res) {
  const id = parseInt(req.params.id);
  let thecloth = clothes.read(id);
  res.status(200).json(thecloth);
}

function createCloth(req, res) {
  let content = req.body;
  let createdCloth = clothes.create(content);
  res.status(201).json(createdCloth);
}

function updateCloth(req, res) {
  let content = req.body;
  const id = parseInt(req.params.id);
  let updated = clothes.update(id, content);
  res.status(200).json(updated);

}

function deleteCloth(req, res) {
  const id = parseInt(req.params.id);
  let deleted = clothes.delete(id);
  res.status(200).json(deleted);
}

module.exports = router;
