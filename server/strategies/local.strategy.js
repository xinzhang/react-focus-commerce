var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb');

//var dburl = 'mongodb://localhost:27017/focus-commerce';
var dburl = 'mongodb://mongodb:Password1@ds143132.mlab.com:43132/focus-commerce';

module.exports = function() {
    console.log('local strategy is loading');

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },

    function(username, password, done){
        console.log('local strategy check: ' + username);

        mongodb.connect(dburl, function (err, db) {
            console.log('test mongodb');

            var collection = db.collection('users');
            collection.findOne({
                    email: username
                },

                function (err, results) {
                    console.log("mongodb results: " + JSON.stringify(results));

                    if (results != null && results.password === password) {
                        var user = results;
                        //strip off password.
                        user.password = '';
                        user.confirm_password = '';
                        done(null, user);
                    } else {
                        done(null, false, {message: 'Bad password'});
                    }
                }

            ); //end findOne
        }); //end connect

    })) //end passport use

    console.log('local strategy is loaded');
}
