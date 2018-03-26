var mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    minlength: 4,
    trim: true,
    required: [true, 'Please enter your note.']
  }
}, {
  timestamps: true
})

var Note = mongoose.model('Note', noteSchema);
