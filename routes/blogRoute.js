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

let blogJsonPath = path.resolve(__dirname, '../json/blogs.json')
let blogCategoryJsonPath = path.resolve(__dirname, '../json/blogCategories.json')

router.get('/blogs', function(req, res, next) {
    readJSONFile(blogJsonPath, function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

router.get('/blogs/:id', function(req, res, next) {
    readJSONFile(blogJsonPath, function (err, data) {
      if(err) { throw err; }

      let reqId = req.params.id;
      console.log(reqId);

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

router.get('/blogcategories', function(req, res, next) {
  readJSONFile(blogCategoryJsonPath, function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

module.exports = router;
