var mongodb = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/focus-commerce';

var fs = require('fs');
var path = require('path');

var product = {
  "id": 1,
  "name":"first gen iPod",
  "pic_url":"/image/product/pro-1-220x294.jpg",
  "desc":"More room to move.\nWith 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.\nCover Flow.\nBrowse through your music collection by flipping..",
  "price": 122.0,
  "tax":20.0,
  "rating": 2.3,
  "pic_small_url": "/image/product/%dproduct50x59.jpg",
  "slider_pic_small_url": ["/image/product/pro-%d-220x294.jpg"],
  "slider_pic_large_url": ["/image/product/product%d.jpg"],
  "slider_pic_count": 1,
  "category":"Eletronics",
  "subcategory":"/Laptops & Notebooks/Macs"
}

mongodb.connect(dburl, function (err, db) {
    var collection = db.collection('products');

    collection.insert(product,
        function (err, results) {
    });
});

console.log('closed');
