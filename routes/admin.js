var express = require('express');
var router = express.Router();
const User = require('../models/User');
let loggedin = false;
router.get('/', (req, res) => {
  loggedin = false;
  let login = `<div>
  <a href="https://wahlstrommm.github.io/newsletter-front/"><button>Tillbaka</button></a><br />
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
    loggedin = true;
    res.redirect('/admin/overview');
  } else {
    let html = `Fel inmatning... <a href="/admin"><button>Tillbaka</button></a>`;
    res.send(html);
  }
});

//Get som skickar tillbaka
router.get('/overview', async (req, res) => {
  let userList;
  if (loggedin) {
    try {
      await User.find().then((data) => {
        userList = data;
      });
      let html = '<div><button id="logOutBtn"><a href="https://wahlstrommm.github.io/newsletter-front/">Tillbaka till startsidan</button></a> <a href="/admin"><button>Logga ut</button></a></div>';
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
      return res.send(html);
    } catch (error) {
      res.send('fel', error);
    }
  } else {
    res.redirect('/admin');
  }
});

module.exports = router;
