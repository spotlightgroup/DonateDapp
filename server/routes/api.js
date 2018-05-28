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
  //console.log("dooooonoooor",req.body)
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      email:req.body.email,
      password: req.body.password,
      type:req.body.type
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

router.post('/profile', function(req, res) {
  //console.log("req.bodyyyyy",req.body);
  User.findOne({username: req.body.username},function(err, user) {
    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      //console.log("useeeeeer",user.fullName)
      user.fullName=req.body.fullName;
      user.phoneNumber1=req.body.phoneNumber1;
      user.phoneNumber2=req.body.phoneNumber2;
      user.address=req.body.address;
      user.email=req.body.email;
      user.overview=req.body.overview;
      user.publicKey=req.body.publicKey;
      // save the user
      user.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  })

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
// route add Posts
// router.post('/addPost',function(req,res){
//   console.log("req body add post",req.body);
// });


router.post('/logout',function(req,res){
	if(req.session.username){
		req.session.destroy(function(err){
			if(err){
				res.status(401).send({success: false, msg: 'failed to log out'});
			}
		});
	}else {
    res.status(401).send({success: false, msg: ''});
  }
});


router.get('/currentUser',function(req,res){
	if(req.session.username){
    User.findOne({username: req.session.username},function(err, user) {
      res.status(201).send({success: true, msg: user});
    })
  }else{
    res.status(401).send({success: false, msg: ""});
  }
});

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
router.post("/addRequest",(req,res)=>{
//  console.log(req.body)
  Request.create(req.body,(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }
  })
});
router.get("/getRequests",(req,res)=>{
  let data = [];
  Request.find({user: req.session.username},(err,Requests)=>{
    if(err){
      console.log(err);
    }else{
      data = data.concat(Requests)
    }
  })

  Request.find({receiver: req.session.username},(err,Requests)=>{
    if(err){
      console.log(err);
    }else{
      data = data.concat(Requests);
      console.log(data);
      let requests = data.filter((ele) => {
        return !ele.approvals.includes(req.session.username)
      })
      res.send(requests);
    }
  })
})


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


router.post('/approve', (req, res) => {
  Request.findOne(req.body, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      if (!data.approvals.includes(req.session.username)) {
        Request.update(req.body, { $push: {approvals: req.session.username}}, (err, data) => {
          if (err) {
            console.log(err);
          }
          else {
            console.log(data);
          }
        })

      }
      else {
        console.log('the request is already approved');
      }
    }
  })
})
module.exports = router;
