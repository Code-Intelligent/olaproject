//importing modules (libraries)
var path = require('path');
var express = require('express');
var ejs = require("ejs")
var bodyParser = require("body-parser")
const key  = require('./config/key');
var cookieParser = require("cookie-parser");
const mongoose = require('mongoose');

//declaration and creation of express app
var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

const db = require('./config/key').MongoURL;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDb connected.....'))
    .catch(err => console.log(err));

// app.use(bodyParser.urlencoded({ extended: true }));

//-----------------settting view up engines---------
// view engine setup
// using ejs template
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

// configuring the engines
// app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// -----------Setting up of view engine ends-----------

//configuration of the Page routes 
var Routes = require('./routes/index');
app.use('/', Routes);

app.listen(key.PORT, () => {
    console.log('This application is already running on port ', key.PORT);
});