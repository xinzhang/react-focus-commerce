
module.exports = {

  checkAdmin: function(req, res, next) {
    console.log(req.user);

    if (req.user && req.user.role === 'admin') {
      return next();
    }
    console.log('not pass');
    return res.status(401).end();
  },

  checkUser: function(req, res, next) {
    if (req.user && req.user.role === 'user') {
      return next();
    }
    return res.status(401).end();
  }

}
