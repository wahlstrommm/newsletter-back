var express = require('express');
var router = express.Router();
const User = require('../models/User');
//post som kollar om Admin inlogg stämmer.
router.post('/', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email === 'admin' && password === 'admin') {
    res.redirect('./admin/overview');
  } else {
    res.send('fel inmatning');
  }
});
//Get som skickar tillbaka
router.get('/overview', async (req, res) => {
  let userList;

  try {
    await User.find().then((data) => {
      userList = data;
    });
    let html = '<div><button id="logOutBtn"><a href="https://wahlstrommm.github.io/newsletter-front/login.html">Tillbaka till startsidan</button></a></div>';
    userList.forEach((element, index) => {
      html += `<div><h5> Användare nummer ${index + 1}! <br><br>
          Email: ${element.email}<br>
          Förnamn: ${element.fname}<br>
          Efternamn: ${element.lname}<br>
          id: ${element._id} <br>
          password längd: ***** <br>
          </h5>
          <hr>
          </div>`;
    });
    html += '<div><h2>Nedanför hittar ni listan på alla användare som prenumerera<hr>  </h2> </div>';
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].subscribed) {
        let subUser = `<div><br><br><h5>Email: ${userList[i].email}<br><br> <hr></div>`;
        html += subUser;
      }
    }
    html += '</div>';
    return res.json(html);
  } catch (error) {
    res.send('fel', error);
  }
});

module.exports = router;
