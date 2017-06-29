var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var dbUrl = 'mongodb://localhost:27017/focus-commerce';


router.post('/admin/categories/update', function(req, res, next) {

  console.log(req);

  // if (!req.user) {
  //   res.status(401).end();
  //   return;
  // }
  //
  // if (req.user && req.user.role !== 'admin') {
  //   res.status(401).end();
  //   return;
  // }

  let categories = req.body.categories;

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('categories');

      //run update or insert
      collection.remove({}, function (err, data){
        categories.map(x => {
          collection.insert(x);
        })
      });

      res.status(200).send(categories);
    });
});

module.exports = router;
