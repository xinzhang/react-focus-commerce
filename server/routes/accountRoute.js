var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var dburl = 'mongodb://localhost:27017/focus-commerce';

let blogJsonPath = path.resolve(__dirname, '../json/blogs.json')
let blogCategoryJsonPath = path.resolve(__dirname, '../json/blogCategories.json')

router.post('/account/register', function(req, res, next) {
    console.log(req);

    //update the account to DB
    let user = req.body.account;

            mongodb.connect(dburl, function (err, db) {
                var collection = db.collection('users');

                collection.insert(user,
                    function (err, results) {
                        req.login(results.ops[0], function () {
                            //res.redirect('/auth/profile');
                            res.send(user);
                        })
                    });
            });
});

// router.post('/account/login', function(req, res, next) {
//       console.log("body parsing", req.body);
//
//       passport.authenticate('local', {
//         session:false
//       }, function(err, user, info) {
//         console.log("Test:" + user);
//         if (err) {
//             console.log("Error1");
//             return next(err);
//         }
//         if (!user) {
//             console.log("Error2");
//             return res.json(401, {
//                 error: 'Auth Error!'
//             });
//         }
//       });
//
//       // passport.authenticate('login', function (err, req, res) {
//       //     //res.redirect('/auth/profile');
//       //     if (err) { return next(err) };
//       //     console.log('returned');
//       //     res.json(req.account);
//       // });
// });

router.route('/account/login')
    .post(passport.authenticate('local', {
        failureredirect: '/'
    }), function (req, res) {
        //res.redirect('/auth/profile');
        res.json(req.user);
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

module.exports = router;
