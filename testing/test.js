var user = require('../models/User');
var posts = require('../models/Posts');
var expect = require('chai').expect;
var mongoose = require('mongoose');

describe('database `user Model`',function(){
  it('should be a Mongoose model',function(){
    expect(new user()).to.be.instanceOf(mongoose.Model);
  });
  it('should have user schema', function () {
    expect(user.schema).to.exist;
  });
  it('should have a `username` property', function () {
    expect(user.schema.paths.username).to.exist;
  });
  it('should have a `username` property that is a string', function () {
    expect(user.schema.paths.username.options.type.name).to.equal('String');
  });

  it('should have a `username` property that is unique', function () {
   expect(user.schema.paths.username.options.unique).to.be.true;
 });
 it('should have a `email` property that is a string', function () {
 expect(user.schema.paths.email.options.type.name).to.equal('String');
 });

 it('should have a `email` property that is unique', function () {
  expect(user.schema.paths.email.options.unique).to.be.true;
});

 it('should have a `password` property', function () {
   expect(user.schema.paths.password).to.exist;
 });

 it('should have a `password` property that is a string', function () {
   expect(user.schema.paths.password.options.type.name).to.equal('String');
 });

 it('should have a `phonenumber` property', function () {
   expect(user.schema.paths.phoneNumber1).to.exist;
 });

 it('should have a `phonenumber` property that is a number', function () {
     expect(user.schema.paths.phoneNumber1.options.type.name).to.equal('Number');
 });
});


describe('database `posts Model`',function(){
  it('should be a Mongoose model',function(){
    expect(new posts()).to.be.instanceOf(mongoose.Model);
  });
  it('should have posts schema', function () {
    expect(posts.schema).to.exist;
  });
  it('should have a `user` property', function () {
    expect(posts.schema.paths.user).to.exist;
  });
  it('should have a `user` property that is a string', function () {
    expect(posts.schema.paths.user.options.type.name).to.equal('String');
  });
  it('should have a `publicKey` property', function () {
    expect(posts.schema.paths.publicKey).to.exist;
  });
  it('should have a `publicKey` property that is a string', function () {
    expect(posts.schema.paths.publicKey.options.type.name).to.equal('String');
  });
 });
