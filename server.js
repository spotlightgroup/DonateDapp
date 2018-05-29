
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const app = express();
const api =require ('./server/routes/api');
var Post = require("./models/Posts");
var User= require("./models/User");
///////////////////
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
var session = require('express-session');

//app.use(session({secret:'this is secret'}));
app.use(session({
  secret: 'keyboard secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
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

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/DonateDapp/index.html'))
});


var port = 3000
app.listen(process.env.PORT || port , function () {
	console.log("server is listening "+ port +" Port")
});


module.exports = app; // for testing
