var express = require('express');
var router = express.Router();

var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
//var dbUrl = 'mongodb://localhost:27017/focus-commerce';
var dbUrl = 'mongodb://mongodb:Password1@ds143132.mlab.com:43132/focus-commerce';

router.post('/orders/new', function(req, res, next){
  mongodb.connect(dbUrl, function(err, db){
      var order = req.body.order;

      //check if current userid === the order userid
      let userid = order.userid;
      console.log(userid);

      var collection = db.collection('orders');

      collection.insertOne(order).then( result => {
        order._id = result.insertedId;
        res.status(200).send(order)
        db.close();
      }).catch(err => {
        res.status(500).send(err.errorMessage);
      })
  })//end connect
});

router.get('/orders', function(req, res, next){
  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('orders');
      collection.find({}, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage)
        }
        var orders = [];
        results.each( function(err, item){
          if (err || !item) {
            res.status(200).send(orders);
            db.close();
          }else {
            orders.push(item);
          }
        });
      }) //end find
  })//end connect
});

router.get('/orders/:id', function(req, res, next){
  let userId = req.params.id;
  //check your userid == the user

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('orders');
      collection.find({userId: userId}, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage)
        }
        var orders = [];
        results.each( function(err, item){
          if (err || !item) {
            res.status(200).send(orders);
            db.close();
          }else {
            orders.push(item);
          }
        });
      }) //end find
  })//end connect
});
module.exports = router;
