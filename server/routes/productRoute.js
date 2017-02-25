var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

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

router.get('/products', function(req, res, next) {
  readJSONFile(productJsonPath, function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

router.get('/relatedproducts/:id', function(req, res, next) {
    readJSONFile(productJsonPath, function (err, data) {
    if(err) { throw err; }
    let reqId = req.params.id;

    res.json(data);
  });
    res.end
});

router.get('/products/:pageno', function(req, res, next) {
    readJSONFile(productJsonPath, function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

router.get('/product/:id', function(req, res, next) {
    readJSONFile(productJsonPath, function (err, data) {
      if(err) { throw err; }

      let reqId = req.params.id;
      console.log("product detail ", reqId);

      //let element = data.filter(function(d){
      //  return d.id == reqId;
      //});

      let element = data.find(x => {
        return x.id == reqId;
      });

      console.log(element);
      if (element) {
        res.json(element);
      } else {
        res.status(404).send("not found");
      }

      res.end;
  });
});

router.get('/categories', function(req, res, next) {
    readJSONFile(productCategoryJsonPath, function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

module.exports = router;
