var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
//Loggar in användare. Decryptar lösen etc.
router.post('/', async (req, res) => {
  let testUser;
  User.findOne({ email: req.body.email }, function (err, data) {
    testUser = data;
    if (testUser === null) {
      return res.send('finns ingen användare');
    } else {
      try {
        bcrypt.compare(req.body.password, testUser.password, function (err, response) {
          if (err) {
            console.log('fel' + err);
          }
          if (response) {
            let confirmLoggin = {
              isAllowed: response,
              _id: testUser._id,
              subscribed: testUser.subscribed,
              email: req.body.email,
            };
            res.json(confirmLoggin);
          } else {
            res.send('Fail fel lösen');
            return console.log({ success: false, message: 'passwords do not match' });
          }
        });
      } catch {
        console.log(err);
        res.setHeader(500).send(err, 'Fel');
      }
    }
  });
});

module.exports = router;
