var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');
router.put('/', async (req, res) => {
  let user = { _id: req.body._id };
  let userForUpdate = req.body;
  try {
    await User.findOneAndUpdate(user, userForUpdate, {
      new: true,
    });
    console.log(user, typeof user, 'user');
    console.log(userForUpdate, typeof userForUpdate, 'userforUpdate');
  } catch (error) {
    console.log(error);
  }
  res.json({ message: 'användaren uppdaterades' });
});
module.exports = router;
