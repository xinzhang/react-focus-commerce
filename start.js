var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var blogRoute = require('./routes/blogRoute');
var productRoute = require('./routes/productRoute')

var app = express();
var port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

console.log('start NODE for aws setup');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('./build'));
app.use(express.static('./json'));

app.use('/api/', blogRoute);
app.use('/api/', productRoute);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port);
console.log('start to listening ' + port);
