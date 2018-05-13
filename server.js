
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const http = require ('http');
const app = express();
<<<<<<< HEAD

const api =require ('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'dist/DonateDapp')));

app.use('/api',api);

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/DonateDapp/index.html'))
});

const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);

=======
const api =require ('./server/routes/api');
///////////////////
var favicon = require('serve-favicon');
var logger = require('morgan');
var morgan = require('morgan');
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
const port = process.env.PORT || '3000';
app.set('port',port);
const server = http.createServer(app);
>>>>>>> add passport
server.listen(port,() => console.log(`running on localhost:${port}`));
