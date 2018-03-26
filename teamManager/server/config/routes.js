const mongoose = require('mongoose');
const players = require('../controllers/players');
const router = require('express').Router();

module.exports = router
  .get('/', players.index)
  .post('/', players.create)
  .delete('/:id', players.destroy)
  .put('/', players.update)
