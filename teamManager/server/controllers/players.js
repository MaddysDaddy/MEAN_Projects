const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
  index(req, res) {
    Player.find({})
      .then(players => res.json(players))
      .catch(error => console.log(error));
  },
  create(req, res) {
    Player.create(req.body)
      .then(savedPlayer => res.json(savedPlayer))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log(errors);
      });
  },
  destroy(req, res) {
    console.log(req.params);


    Player.findByIdAndRemove(req.params.id)
      .then(removedPlayer => res.json(removedPlayer))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log(errors);
      });
  },
  update(req, res) {
    console.log('controller', req.body);

    Player.findByIdAndUpdate(req.body._id, req.body)
      .then(updatedPlayer => res.json(updatedPlayer))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log(errors);
      });
  }
}
