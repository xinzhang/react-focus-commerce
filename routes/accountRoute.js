var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

let blogJsonPath = path.resolve(__dirname, '../json/blogs.json')
let blogCategoryJsonPath = path.resolve(__dirname, '../json/blogCategories.json')

router.post('/account/register', function(req, res, next) {
    console.log(req);
    //update the account to DB
    let data = req.body.account;
    
    res.json(data);
    res.end
});

router.post('/account/login', function(req, res, next) {
    console.log(req.account);
    //update the account to DB
    let data = req.account;
    if(err) { throw err; }
    res.json(data);
    res.end
});

router.post('/account/changePassword', function(req, res, next) {
    console.log(req.account);
    //update the account to DB
    let data = req.account;
    if(err) { throw err; }
    res.json(data);
    res.end
});

module.exports = router;
