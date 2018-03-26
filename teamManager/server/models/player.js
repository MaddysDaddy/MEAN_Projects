const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must enter a player name that is at least 2 characters long.'],
    trim: true,
    minlength: 2
  },
  position: {
    type: String,
    trim: true
  },
  status_g1: {
    type: String,
    trim: true,
    default: 'undecided'
  },
  status_g2: {
    type: String,
    trim: true,
    default: 'undecided'
  },
  status_g3: {
    type: String,
    trim: true,
    default: 'undecided'
  },
})

const Player = mongoose.model('Player', playerSchema);
