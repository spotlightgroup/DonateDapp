/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const app = express();
const api =require ('./server/routes/api');

var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');


app.use(session({
  secret:'this is secret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

var Post = require("./models/Posts");
var User= require("./models/User");
var config = require('./config/database');

app.use(logger('dev'));
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
//build dist folder
app.use(express.static(path.join(__dirname,'dist/DonateDapp')));
//using api to organize our code, where we can find most our Routes
app.use('/api',api);

// add new post to the Post schema
app.post("/addPost", (req, res)=> {
  Post.create(req.body, (err, data)=> {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });
});


// get all posts from database
app.get("/getPosts", (req, res)=> {
  Post.aggregate([
    {
      $lookup: {
        from: 'users',
         localField: "user",
         foreignField: "username",
         as: "userInfo"
       }
    }
  ], (err, data)=> {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data.reverse())

    };
  });
});

//route any non exist path to the home page
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/DonateDapp/index.html'))
});

//Listen on provided port, on all network interfaces
var port = 3000
app.listen(process.env.PORT || port , function () {
	console.log("server is listening "+ port +" Port")
});


module.exports = app; // for testing
