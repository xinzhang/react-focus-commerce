var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var dbUrl = 'mongodb://localhost:27017/focus-commerce';

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

let productJsonPath = path.resolve(__dirname, '../json/products.json');
let productCategoryJsonPath = path.resolve(__dirname, '../json/productCategories.json');

router.get('/products/:pageno', function(req, res, next) {
  // readJSONFile(productJsonPath, function (err, data) {
  //   if(err) { throw err; }
  //   res.json(data);
  //   res.end
  // });
  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('products');
      collection.find({}, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage)
        }
        var prods = [];
        results.each( function(err, item){
          if (err || !item) {
            res.status(200).send(prods);
            db.close();
          }else {
            prods.push(item);
          }
        });
      }) //end find
  })
});

router.get('/products/category/:category', function(req, res, next) {

  cat = req.params.category;
  console.log(cat);

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('products');
      collection.find({category: cat}, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage)
        }
        var prods = [];
        results.each( function(err, item){
          if (err || !item) {
            res.status(200).send(prods);
            db.close();
          }else {
            prods.push(item);
          }
        });
      }) //end find
  })
});

router.get('/relatedproducts/:id', function(req, res, next) {
    readJSONFile(productJsonPath, function (err, data) {
    if(err) { throw err; }
    let reqId = req.params.id;

    res.json(data);
  });
    res.end
});

router.get('/products', function(req, res, next) {
    readJSONFile(productJsonPath, function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

router.get('/product/:id', function(req, res, next) {
  //   readJSONFile(productJsonPath, function (err, data) {
  //     if(err) { throw err; }
  //
  //     let reqId = req.params.id;
  //     console.log("product detail ", reqId);
  //
  //     //let element = data.filter(function(d){
  //     //  return d.id == reqId;
  //     //});
  //
  //     let element = data.find(x => {
  //       return x.id == reqId;
  //     });
  //
  //     console.log(element);
  //     if (element) {
  //       res.json(element);
  //     } else {
  //       res.status(404).send("not found");
  //     }
  //
  //     res.end;
  // });
  let reqId = req.params.id;
  console.log("product detail ", reqId);

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('products');
      collection.find({_id: reqId }, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage);
        }
        if (results.length == 0){
          res.status(404).send("not found");
        }
        res.status(200).send(results[0]);
      }) //end find
  })
});

// router.get('/categories', function(req, res, next) {
//     readJSONFile(productCategoryJsonPath, function (err, data) {
//     if(err) { throw err; }
//     res.json(data);
//     res.end
//   });
// });

router.get('/categories', function(req, res, next){
  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('categories');
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


router.get('/admin/products', function(req, res, next){
  if (!req.user) {
    res.status(401).end();
    return;
  }

  if (req.user && req.user.role !== 'admin') {
    res.status(401).end();
    return;
  }

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('products');
      collection.find({}, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage)
        }
        var prods = [];
        results.each( function(err, item){
          if (err || !item) {
            res.status(200).send(prods);
            db.close();
          }else {
            prods.push(item);
          }
        });
      }) //end find
  })
});

router.post('/admin/products/new', function(req, res, next){
  if (!req.user) {
    res.status(401).end();
    return;
  }

  if (req.user && req.user.role !== 'admin') {
    res.status(401).end();
    return;
  }

  mongodb.connect(dbUrl, function(err, db){
      var p = req.body.product;
      var collection = db.collection('products');

      collection.insert(p, function(err, result){
        if (err) {
          res.status(500).send(err.errorMessage);
        }
        res.status(200).send("OK");
      })
  })
});

router.post('/admin/products/update', function(req, res, next) {
  if (!req.user) {
    res.status(401).end();
    return;
  }

  if (req.user && req.user.role !== 'admin') {
    res.status(401).end();
    return;
  }

  let prod = req.body.product;
  let id = objectID(prod._id);
  prod._id = id;

  mongodb.connect(dbUrl, function(err, db){
      var collection = db.collection('products');
      collection.update( {_id:id }, prod, function(err, results){
        if (err) {
          res.status(500).send(err.errorMessage);
        }

        res.status(200).send(prod);
      }) //end find
  })
});

module.exports = router;
