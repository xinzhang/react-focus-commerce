var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

var passport = require('passport');
var jwt = require('jsonwebtoken');
var utils = require('../utils')
var cfg = require('../config.js');

var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var dburl = 'mongodb://localhost:27017/focus-commerce';

let blogJsonPath = path.resolve(__dirname, '../json/blogs.json')
let blogCategoryJsonPath = path.resolve(__dirname, '../json/blogCategories.json')

router.post('/account/register', function(req, res, next) {
    console.log(req);

    //update the account to DB
    let user = req.body.account;
    user.role = 'user';

    mongodb.connect(dburl, function (err, db) {
        var collection = db.collection('users');

        collection.findOne({
                email: user.email
            },

            function (err, results) {
                console.log("mongodb results: " + JSON.stringify(results));

                if (results != null) {
                    res.status(500).send("the username email has been existed.");
                } else {
                    //execute insert now
                    collection.insertOne(user,
                        function (err, result) {
                            req.login(results.ops[0], function () {
                                //res.redirect('/auth/profile');
                                user._id = result.insertedId;
                                res.send(user);
                            })
                    });
                }
            }
        ); //end findOne

    });//end mongodb connect

});

router.route('/account/login')
    .post(passport.authenticate('local', {
        failureredirect: '/'
    }), function (req, res) {
        //res.redirect('/auth/profile');

        var token = utils.generateToken(req.user)
        res.json({
          user: req.user,
          token: token
        });

    });

router.get('/account/logout', function(req, res){
      req.logout();
      res.status(200).send('1');
});

router.post('/account/changePassword', function(req, res, next) {
    console.log(req.account);
    //update the account to DB
    let data = req.account;
    if(err) { throw err; }
    res.json(data);
    res.end
});

router.get('/account/token', function(req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({
      message: 'Must pass token'
    });
  }//end get token

  jwt.verify(token, cfg.jwtSecret, function(err, user) {
    if (err)
      throw err;

    console.log('jwt verify', user)
    let uid = objectID(user._id);

    mongodb.connect(dburl, function (err, db) {
        console.log('test mongodb');

        var collection = db.collection('users');
        collection.findOne({
                '_id': uid
            },

            function (err, results) {
                console.log("mongodb results: " + JSON.stringify(results));

                if (results != null) {
                    var user = results;
                    //strip off password.
                    user.password = '';
                    user.confirm_password = '';
                    res.json({
                      user: user,
                      token: token
                    });

                } else {
                  return res.status(401).json({
                    message: 'user invalid'
                  });
                }
            }

        ); //end findOne
    }); //end connect

  }); //end verify

})

module.exports = router;
