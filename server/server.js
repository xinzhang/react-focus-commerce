var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('./passport');
var session = require('express-session');

var blogRoute = require('./routes/blogRoute');
var productRoute = require('./routes/productRoute');
var accountRoute = require('./routes/accountRoute');
var brandRoute = require('./routes/brandRoute');
var categoryRoute = require('./routes/categoryRoute');
var orderRoute = require('./routes/orderRoute');

var jwt = require('jsonwebtoken');
var config = require('./config.js');

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

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all the future routes, this helps to know if the request is authenticated or not.
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next();

  token = token.replace('Bearer ', '');

  jwt.verify(token, config.jwtSecret, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Please register Log in using a valid email to submit'
      });
    } else {
      req.user = user;
      next();
    }
  });
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/api/', blogRoute);
app.use('/api/', productRoute);
app.use('/api/', accountRoute);
app.use('/api/', brandRoute);
app.use('/api/', categoryRoute);
app.use('/api/', orderRoute);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port);
console.log('start to listening ' + port);
