var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;

var dbUrl = 'mongodb://localhost:27017/focus-commerce';

var fs = require('fs');
var path = require('path');

var x = {
  //_id:'58bd123af04a50188cf0b0f4',
  name: 'some other brand - 2',
  qty: 3
}

// mongodb.connect(dbUrl, function(err, db){
//     var collection = db.collection('brands');
//     var id = objectID(x._id);
//
//     collection.find({_id: id}, function(err, result){
//         result.each(function(err, item) {
//           console.log(item);
//         })
//     });
//
//     x._id = id;
//     collection.update({_id: id}, x, function(err, result){
//       console.log(err);
//       console.log(result);
//     });
// });

mongodb.connect(dbUrl, function(err, db){
  var collection = db.collection('inventory');
  // collection.insert(x, function(err, result){
  //   console.log(result.ops[0]._id);
  // });

  collection.insertOne(x).then(r => {
    console.log(r);
    console.log(r.insertedId);
  }).catch(err => {
    console.log(err);
  })
})
