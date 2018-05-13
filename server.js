
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const app = express();
const api =require ('./server/routes/api');
///////////////////
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
app.use(logger('dev'));
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use(passport.initialize());
  //////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'dist/DonateDapp')));
app.use('/api',api);
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/DonateDapp/index.html'))
});
var port = 2000
app.listen(process.env.PORT || port , function () {
	console.log("server is listening "+ port +" Port")
});
