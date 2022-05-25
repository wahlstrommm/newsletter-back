var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  let email = req.body.email.toLowerCase();
  let password = req.body.password.toLowerCase();
  if (email === 'admin' && password === 'admin') {
    let dataFromDB;
    await req.app.locals.db
      .collection('users')
      .find()
      .toArray()
      .then((data) => {
        dataFromDB = data;
      });
    res.set({ 'Content-Type': 'text/html; charset=utf-8' });
    let html = '<div><button><a href="/">Tillbaka till startsidan</button></a>';
    dataFromDB.forEach((element) => {
      html += `<h3>
        ${element.email}<br>
        id: ${element._id} <br>
        password längd: ***** <br>
        prenumererar: ${element.subscribed} 
        </h3>`;
    });
    html += '</div>';
    res.send(html);
  } else {
    res.send('fel inmatning');
  }
});

module.exports = router;
