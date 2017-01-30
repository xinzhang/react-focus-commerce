var express = require('express');
var fs = require('fs');
var router = express.Router();

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

router.get('/blogs', function(req, res, next) {
    readJSONFile('blogs.json', function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

router.get('/blogs/:id', function(req, res, next) {
    readJSONFile('blogs.json', function (err, data) {
      if(err) { throw err; }
      let element = data.Find(x=>{
            x.id === req.id;
      })
      res.json(element);
      res.end;    
  });
});

module.exports = router;
