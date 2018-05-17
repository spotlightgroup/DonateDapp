var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../config/database');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../../models/User");
var Post = require("../../models/Post");

// router for register new user

router.post('/register', function(req, res) {
  console.log("ABSAMRAAA",req.body)
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      email:req.body.email,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

// router for sigin

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.post('/addPost',(req, res)=> {
  let info = req.body;
  Post.create(info, (err, post)=>{
    if (err) {
      console.log(err);
    }
    else {
      console.log("created new post", post);
    }
  });
});

router.get('/getPosts', (req, res)=> {
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

router.dalete('/deletePost:id', (req, res)=> {
  Post.remove(req.params, (err, deleted) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log('deleted: ', deleted);
    }
  })
});


//
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
