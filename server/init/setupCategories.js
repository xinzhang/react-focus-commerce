var mongodb = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/focus-commerce';

var fs = require('fs');
var path = require('path');

let productCategoryJsonPath = path.resolve(__dirname, '../json/productCategories.json');

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

mongodb.connect(dburl, function (err, db) {
    var collection = db.collection('categories');

    readJSONFile(productCategoryJsonPath, function (err, data) {
      data.forEach( d => {
        collection.insert(d,
            function (err, results) {
            });
      });
    });
});

console.log('closed');
