var User = require('../models/User');
var Posts = require('../models/Posts');
var expect = require('chai').expect;
var assert = require('chai').assert;

var mongoose = require('mongoose');

describe('database `User Model`',function(){
  beforeEach(()=>{
    console.log("hi")
  });
  it('should be a Mongoose model',function(){
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });
  it('should have User schema', function () {
    expect(User.schema).to.exist;
  });
  it('should have a `Username` property', function () {
    expect(User.schema.paths.username).to.exist;
  });
  it('should have a `Username` property that is a string', function () {
    expect(User.schema.paths.username.options.type.name).to.equal('String');
  });

  it('should have a `Username` property that is unique', function () {
   expect(User.schema.paths.username.options.unique).to.be.true;
 });
 it('should have a `email` property that is a string', function () {
 expect(User.schema.paths.email.options.type.name).to.equal('String');
 });

 it('should have a `email` property that is unique', function () {
  expect(User.schema.paths.email.options.unique).to.be.true;
});

 it('should have a `password` property', function () {
   expect(User.schema.paths.password).to.exist;
 });

 it('should have a `password` property that is a string', function () {
   expect(User.schema.paths.password.options.type.name).to.equal('String');
 });

 it('should have a `phonenumber` property', function () {
   expect(User.schema.paths.phoneNumber1).to.exist;
 });

 it('should have a `phonenumber` property that is a number', function () {
     expect(User.schema.paths.phoneNumber1.options.type.name).to.equal('Number');
 });
});


describe('database `Posts Model`',function(){
  it('should be a Mongoose model',function(){
    expect(new Posts()).to.be.instanceOf(mongoose.Model);
  });
  it('should have Posts schema', function () {
    expect(Posts.schema).to.exist;
  });
  it('should have a `User` property', function () {
    expect(Posts.schema.paths.user).to.exist;
  });
  it('should have a `User` property that is a string', function () {
    expect(Posts.schema.paths.user.options.type.name).to.equal('String');
  });
  it('should have a `publicKey` property', function () {
    expect(Posts.schema.paths.publicKey).to.exist;
  });
  it('should have a `publicKey` property that is a string', function () {
    expect(Posts.schema.paths.publicKey.options.type.name).to.equal('String');
  });
 });
