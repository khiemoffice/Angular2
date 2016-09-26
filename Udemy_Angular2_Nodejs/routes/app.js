var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.get('/', function(req, res, next) {
    User.findOne({}, function(err, res){
        if(err) return res.send('Error');
        var email = res.name;
    });
    
    res.render('node', {email:email});
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        firstname: "max",
        lasttname: "nguyen",
        password: "sfewfgergg",
        email: email
      
    });
    user.save();
    res.redirect('/');

})

module.exports = router;
