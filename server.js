
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const app = express();
const api =require ('./server/routes/api');
var User = require("./models/User");
var Post = require("./models/Post");
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

// for add a post and save it in the database
app.post('/Post',(req, res)=> {
  let info = req.body;
  Post.create(info, (err, post)=>{
    if (err) {
      console.log(err);
    }
    else {
      res.send(post)
    }
  });
});
// for get 12 posts
app.get('/getPosts', (req, res)=> {
  let posts = [];
  Post.find({}, (err, data)=> {
    if (err) {
      console.error(err);
    }else {
      for (let i = 0; i < 12; i ++) {
        if (data[i]) {
          posts.push(data[i])
        }
      }
      res.send(posts)
    }

  });
});

app.post('/delPost', (req, res)=> {
  Post.remove(req.body, (err, deleted) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log('deleted: ', deleted);
    }
  })
});

// route for edit a post
app.post('/editPost', (req, res)=> {

  Post.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, (err, updated) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log('updated: ', updated);

    }
  })
});
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/DonateDapp/index.html'))
});



var port = 2000
app.listen(process.env.PORT || port , function () {
	console.log("server is listening "+ port +" Port")
});
