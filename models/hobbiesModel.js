const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HobbiesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Required field']
  },
  experienceLevel: {
    type: String,
    required: [true, 'Required field']
  },
  year: {
    type: String,
    required: [true, 'Required field']
  }
});

const Hobbies = mongoose.model('Hobbies', HobbiesSchema);
module.exports = Hobbies;