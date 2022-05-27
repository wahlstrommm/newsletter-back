const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Lägg till ett namn'],
    unique: true,
    trim: true,
    maxlength: [50, 'Namn kan inte var större än 50 bokstäver'],
  },
  lname: {
    type: String,
    required: [true, 'Lägg till ett namn'],
    unique: true,
    trim: true,
    maxlength: [50, 'Namn kan inte var större än 50 bokstäver'],
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Var snäll och skriv en riktig mail!'],
  },
  password: {
    type: String,
    required: [true, 'Lägg till ett lösenord'],
    unique: true,
    trim: true,
  },
  subscribed: {
    type: Boolean,
    required: [true],
  },
});

module.exports = mongoose.model('User', UserSchema);
