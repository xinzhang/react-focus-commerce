var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('./passport');
var session = require('express-session');

var blogRoute = require('./routes/blogRoute');
var productRoute = require('./routes/productRoute');
var accountRoute = require('./routes/accountRoute');

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

console.log('node express dev server start setup');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'xz_react_focus_commerce'}));

passport(app);

app.use('/api/', blogRoute);
app.use('/api/', productRoute);
app.use('/api/', accountRoute);

app.listen(port);
console.log('start to listening ' + port);
