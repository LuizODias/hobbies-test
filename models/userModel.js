const mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Required field']
  },
  hobbies: {
    type: Array(ObjectId)
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;