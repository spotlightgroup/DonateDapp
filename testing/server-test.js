let User = require('../models/User');
let Posts = require('../models/Posts');
var expect = require('chai').expect;
var app = require('../server')

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('User', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
           done();
        });

    });
});

    /*
  * Test the /GET route
  */


  describe('/GET posts', () => {
      it('it should GET all the posts', (done) => {
        chai.request(server)
            .get('/getPosts')
            .end((err, res) => {
              //  res.should.have.status(200);
                expect(res.body).to.exist;
                res.body.should.be.a('array');
              done();
            });
      });
      it('it should post all the posts', (done) => {
        chai.request(server)
            .post('/addPosts')
            .end((err, res) => {
               res.should.have.status(404);
                //expect(res.body).to.exist;
                res.body.should.be.a('object');
              done();
            });
      });

  });


  describe('Reciever', () => {
      it('it should have status 200', (done) => {
        chai.request(server)
            .get('/api/Reciever')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  describe('register', () => {
      it('it should have status 200', (done) => {
        chai.request(server)
            .post('/api/register')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
