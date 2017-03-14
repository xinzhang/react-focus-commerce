var jwt = require('jsonwebtoken');
var config = require('../config.js');

function generateToken(user) {
  //Dont use password and other sensitive fields
  //Use fields that are useful in other parts of the app/collections/models
  var u = {
    username: user.email,
    role: user.role,
    _id: user._id.toString(),
    isEmailVerified: user.isEmailVerified //used to prevent creating posts w/o verifying emails
  };

  return token = jwt.sign(u, config.jwtSecret, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

module.exports = {
  generateToken: generateToken
}
