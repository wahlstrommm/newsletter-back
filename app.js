var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const dontenv = require('dotenv');
const colors = require('colors');

dontenv.config({ path: './config/config.env' });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
}).then((client) => {
  console.log('Server är igång'.yellow.bold);
  const db = client.db(process.env.MONGO_DB);
  app.locals.db = db;
  database = db;
});

module.exports = app;
