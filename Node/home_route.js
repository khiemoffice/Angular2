var express = require('express')
  , router = express.Router();

var User     = require('./models/user');


// Car brands page
router.get('/', function(req, res) {
  res.sendfile(__dirname+'/index.html');
})
router.post('/create-user', function(req, res) {
    //res.end(req.body.username);
    var user= new User();
    user.profile.name=req.body.name;
    user.password = req.body.password;
    user.email=req.body.email;


     user.save(function(err) {
            if (err) res.send(err);

            res.json('successfully save  new user');
        });

})
// Car brands page
router.get('/brands', function(req, res) {
  res.send('Audi, BMW, Mercedes')
})

// Car models page
router.get('/models', function(req, res) {
  res.send('Audi Q7, BMW X5, Mercedes GL')
})

module.exports = router
