const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Lägg till ett lösenord'],
    // unique: true,
    // trim: true,
    // maxlength: [10, 'Lösenordet kan inte vara längre 10 tecken'],
  },
  subscribed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
// fname: {
//   type: String,
//   required: [true, 'Lägg till ett namn'],
//   unique: true,
//   trim: true,
//   maxlength: [50, 'Namn kan inte var större än 50 bokstäver'],
// },
// lname: {
//   type: String,
//   required: [true, 'Lägg till ett namn'],
//   unique: true,
//   trim: true,
//   maxlength: [50, 'Namn kan inte var större än 50 bokstäver'],
// },
