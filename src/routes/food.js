'use strict';

const express = require('express');

// pull in food model, instantiate
const Food = require('../models/food');
const foods = new Food();

// start new express Router application
const router = express.Router();

// RESTful routes
router.get('/foods', getfoods);
router.get('/foods/:id', getFood);
router.post('/foods', createFood);
router.put('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

// RESTful route handlers
function getfoods(req, res) {
  let getAllfoods = foods.read();
  res.status(200).json(getAllfoods);
}

function getFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = foods.read(id);
  res.status(200).json(theFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = foods.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  let content = req.body;
  const id = parseInt(req.params.id);
  let updated = foods.update(id, content);
  res.status(200).json(updated);
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deleted = foods.delete(id);
  res.status(200).json(deleted);
}

module.exports = router;
