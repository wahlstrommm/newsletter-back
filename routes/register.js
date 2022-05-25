var express = require('express');
var router = express.Router();
let UserSchema = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const dataFromDB = require('../services/GetFromDB');

router.post('/', async (req, res) => {
  let userEmail = '';
  await req.app.locals.db
    .collection('users')
    .findOne({ email: req.body.email })
    .then((data) => {
      userEmail = data;
      return userEmail;
    });
  if (userEmail) {
    res.send('Finns redan ett konto med denna mail');
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new UserSchema({ _id: new mongoose.Types.ObjectId(), email: req.body.email, password: hashedPassword, subscribed: false });
      res.json(user);
      req.app.locals.db.collection('users').insertOne(user);
    } catch (error) {
      res.status(500).send();
    }
  }
});

module.exports = router;
