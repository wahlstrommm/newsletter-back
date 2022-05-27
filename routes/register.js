var express = require('express');
var router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
//Kolla så mailen annars skapar man en ny användare!
router.post('/', async (req, res) => {
  let userEmail = req.body.email;
  await User.findOne({ email: req.body.email }).then((data) => {
    userEmail = data;
    return userEmail;
  });
  if (userEmail) {
    res.status(400).send('Blev något fel testa igen!');
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({ fname: req.body.fname, lname: req.body.lname, email: req.body.email, password: hashedPassword, subscribed: req.body.subcriber });

      try {
        const Newuser = await user.save();
        res.json({ status: 'OK' });
      } catch (error) {
        res.status(400).json({ message: error.message });
        console.log('error 400', error);
      }
    } catch (error) {
      res.status(500).send();
    }
  }
});

module.exports = router;
