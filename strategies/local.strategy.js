var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb');

var dburl = 'mongodb://localhost:27017/focus-commerce';

module.exports = function() {
    console.log('local strategy is loading');

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password, done){
        console.log('local strategy check: ' + username);
        done(null, true);
        // mongodb.connect(dburl, function (err, db) {
        //     var collection = db.collection('users');
        //     collection.findOne({
        //             email: username
        //         },
        //
        //         function (err, results) {
        //             console.log(JSON.stringify(results));
        //
        //             if (results != null && results.password === password) {
        //                 var user = results;
        //                 done(null, user);
        //             } else {
        //                 done(null, false, {message: 'Bad password'});
        //             }
        //         }
        //
        //     ); //end findOne
        // }); //end connect

    })) //end passport use

    console.log('local strategy is loaded');
}
