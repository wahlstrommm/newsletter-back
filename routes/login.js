var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
router.post('/', async (req, res) => {
  let testUser;
  await req.app.locals.db.collection('users').findOne({ email: req.body.email }, function (err, data) {
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
            console.log('inloggad');
            res.send('inloggad');
          } else {
            res.send('Fail fel lösen');
            return console.log({ success: false, message: 'passwords do not match' });
          }
        });
      } catch {
        res.setHeader(500).send();
      }
    }
  });
});

module.exports = router;
