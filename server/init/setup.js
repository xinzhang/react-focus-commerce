var mongodb = require('mongodb').MongoClient;
//var dburl = 'mongodb://localhost:27017/focus-commerce';
var dburl = 'mongodb://mongodb:Password1@ds143132.mlab.com:43132/focus-commerce';
var async = require('async');

var admin = {
  firstname:'admin',
  email: 'admin@focus.com',
  password: 'admin',
  confirm_password : 'admin',
  news_letter: 0,
  lastname: '',
  telephone: '',
  error_message: '',
  role: 'admin'
}

mongodb.connect(dburl, function (err, db) {
    var collection = db.collection('users');

    collection.insert(admin,
        function (err, results) {
        });
});

console.log('closed');
