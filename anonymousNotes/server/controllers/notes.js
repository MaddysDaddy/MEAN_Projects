const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports = {
  index(req, res) {
    Note.find({}).sort({
        createdAt: -1
      })
      .then(notes => res.json(notes))
      .catch(error => console.log(error));
  },
  create(req, res) {
    console.log(req.body);

    Note.create(req.body)
      .then(savedNote => res.json(savedNote))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      });
  },
}
