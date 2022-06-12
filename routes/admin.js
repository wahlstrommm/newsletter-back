var express = require('express');
var router = express.Router();
const User = require('../models/User');
router.get('/', (req, res) => {
  let login = `<div>
  <a href="http://127.0.0.1:5500/index.html"><button>Tillbaka</button></a><br />
  <form action="admin/login" method="post">
  <input placeholder="email" name="email" type="text" />
<input placeholder="Password" name="password" type="password" />
<br />
<input name="submitButton" type="submit" />
</form>
</div>`;
  res.send(login);
});
//post som kollar om Admin inlogg stämmer.
router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email === 'admin' && password === 'admin') {
    res.redirect('/admin/overview');
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
    let html = '<div><button id="logOutBtn"><a href="/">Tillbaka till startsidan</button></a></div>';
    userList.forEach((element, index) => {
      html += `<div><h5> Användare nummer ${index + 1}! <br><br>
          Email: ${element.email}<br>
          Förnamn: ${element.fname}<br>
          Efternamn: ${element.lname}<br>
          id: ${element._id} <br>
          pa  ssword längd: ***** <br>
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
    return res.send(html);
  } catch (error) {
    res.send('fel', error);
  }
});

module.exports = router;
