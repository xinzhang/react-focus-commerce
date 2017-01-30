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
    readJSONFile('./data/blogs.json', function (err, data) {
    if(err) { throw err; }
    res.json(data);
    res.end
  });
});

router.get('/blogs/:id', function(req, res, next) {
    readJSONFile('./data/blogs.json', function (err, data) {
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

module.exports = router;
