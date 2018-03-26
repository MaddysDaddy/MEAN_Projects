const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Must enter a player name that is at least 2 characters long.'],
    trim: true,
    unique: true
  },
  score: {
    type: Number,
  },
  avatar: {
    type: String
  }
})

playerSchema.plugin(uniqueValidator, {
  message: `{PATH} must be unique`
});

module.exports = mongoose.model('Player', playerSchema);
