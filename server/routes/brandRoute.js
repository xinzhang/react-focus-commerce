var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

var mongodb = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/focus-commerce';

router.get('/brands', function(req, res, next){
  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('brands');
      collection.find({}, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage)
        }
        var cats = [];
        results.each( function(err, item){
          if (err || !item) {
            res.status(200).send(cats);
            db.close();
          }else {
            cats.push(item);
          }
        });
      }) //end find
  })
});

router.post('/admin/brands/update', function(req, res, next) {

  let brands = req.body.brands;

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('brands');      
      // collection.update( {_id:id }, prod, function(err, results){
      //   if (err) {
      //     res.status(500).send(err.errorMessage);
      //   }
      //
      //   if (results.length == 0){
      //     res.status(404).send("not found");
      //   }
      //
      //   console.log('succeed');
      //   console.log(results[0]);
      //
      //   res.status(200).send(results[0]);
      // }) //end find
      res.status(200).send(brands);
  })
});
module.exports = router;
