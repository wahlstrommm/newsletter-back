var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const dontenv = require('dotenv');
const colors = require('colors');

dontenv.config({ path: './config/config.env' });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var updateUserRouter = require('./routes/updateUser');
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
app.use('/updateUser', updateUserRouter);

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'.yellow.bold));

app.listen(PORT, () => console.log('Server igång!'.yellow.bold));
module.exports = app;
