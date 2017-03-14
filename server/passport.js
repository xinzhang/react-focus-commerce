var passport = require('passport');

var cfg = require("./config.js");

var mongodb = require('mongodb');
var dburl = 'mongodb://localhost:27017/focus-commerce';

module.exports = function (app) {
    app.use(passport.initialize());

    app.use(passport.session());

    passport.serializeUser(function(user, done){
        console.log('passport serialize user ' + JSON.stringify(user));
        done(null, user);
    });

    passport.deserializeUser(function(user, done){
        console.log('passport de-serialize user ' + JSON.stringify(user))
        done(null, user);
    });

    require('./strategies/local.strategy')();
};
