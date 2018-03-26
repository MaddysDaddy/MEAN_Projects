const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
  index(req, res) {
    Player.find({}).sort({
        score: -1
      })
      .then(players => res.json(players))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log(errors);
      });
  },
  create(req, res) {
    Player.create(req.body)
      .then(savedPlayer => res.json(savedPlayer))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log(errors);
      });
  }
}
