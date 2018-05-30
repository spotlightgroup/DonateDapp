/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../config/database');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../../models/User");
var Request = require("../../models/Requests");
var Post = require("../../models/Posts");



// router for register new user
router.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      email:req.body.email,
      password: req.body.password,
      type:req.body.type
    });
    // save the user information
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

//router for profile to save the change that user add it
router.post('/profile', function(req, res) {
  //looking for user inside User schema to add the changes to his model
  User.findOne({username: req.body.username},function(err, user) {
    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      user.fullName=req.body.fullName;
      user.phoneNumber1=req.body.phoneNumber1;
      user.phoneNumber2=req.body.phoneNumber2;
      user.address=req.body.address;
      user.email=req.body.email;
      user.overview=req.body.overview;
      user.publicKey=req.body.publicKey;
      // save the new information in the user model
      user.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: user});
      });
    }
  })

});

let username = "";
// router for login
router.post('/login', function(req, res) {
  //find the user from database
username = req.body.username
  User.findOne({
    username: username
  }, function(err, user) {
    if (err) throw err;

    if (!user) { //if user is not exist in database
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          req.session['username']=user.username;
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

// route for logout
router.post('/logout',function(req,res){
	if(req.session.username){ // destroy session if it has username
		req.session.destroy(function(err){
			if(err){
				res.status(401).send({success: false, msg: 'failed to log out'});
			}
		});
	}else {
    res.status(401).send({success: false, msg: ''});
  }
});

//route to get all current user information from the User schema
router.get('/currentUser',function(req,res){
    User.findOne({username: username},function(err, user) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(201).send({success: true, msg: user});

      }
    })
});

// route for post profile image or update it
router.post('/profileImage', (req, res) => {
  User.findOneAndUpdate({username:req.session.username}, {$set: req.body}, (err, data) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log(data);
    }
  })
})


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

// route to add new request to Request schema
router.post("/addRequest",(req,res)=>{
  Request.create(req.body,(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }
  })
});

//route to get all requests for the current user
router.post("/getRequests",(req,res)=>{
  let data = [];
  let user = req.body.username;
  // for the project maker
  Request.find({user: user},(err,Requests)=>{
    if(err){
      console.log(err);
    }else{
      data = data.concat(Requests)
      console.log("project maker requests",data);
      res.send(data);
    }
  })
});


router.post('/getDonorRequests',async(req,res)=>{
  let data = [];
  let user = req.body.username;
  // for the donor
  await Post.find({},async(err,posts) => {
    if(err) {
      console.log(err);
    }
    else{
      for (var i = 0; i < posts.length; i++) {
        for (var j = 0; j < posts[i].donors.length; j++) {
          if (posts[i].donors[j] === user) {
            await Request.find({postId: posts[i]._id}, async(err,requests) =>{
              if (err) {
                console.log(err);
              }
              else {
                data = data.concat(requests)
                console.log("request data",data);
              }
            })
          }
        }
      }
    }
  });
  res.send(data)
});


router.post('/donate', (req, res)=> {
  Post.findOne({_id: req.body._id}, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      if (data.donors.indexOf(req.session.username) === -1) {
        Post.update({_id: req.body._id }, { $push: { donors: req.session.username }, $inc : {balance: req.body.amount} }, (err, data) => {
          if (err) {
            console.log(err);
          }
          else {
            res.send(data);
          }
        })
      }
      else {
        Post.update({_id: req.body._id }, { $inc : {balance: req.body.amount} }, (err, data) => {
          if (err) {
            console.log(err);
          }
          else {
            res.send(data);
          }
        })
      }
    }
  })
})

//route to add approved request to Request schema
router.post('/approve', (req, res) => {
  Request.findOne(req.body.request, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404)
    }
    else {
      if (!data.approvals.includes(req.body.username)) { //if the donor didn't approve this request yet
      //if not, we will add this request to approvals array in Request schema
        Request.update(req.body.request, { $push: {approvals: req.body.username}}, (err, data) => {
          if (err) {
            console.log(err);
            res.sendStatus(404)
          }
          else {
            res.send(data);
          }
        })
      }
        else {
        res.sendStatus(404)
      }
    }
  })
})
module.exports = router;
