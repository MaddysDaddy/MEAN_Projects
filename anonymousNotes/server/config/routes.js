const mongoose = require('mongoose');
const notes = require('../controllers/notes');
const router = require('express').Router();

module.exports = router
  .get('/', notes.index)
  .post('/', notes.create)
