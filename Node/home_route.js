var express = require('express')
  , router = express.Router();

var User     = require('./models/user');


// Car brands page
router.get('/', function(req, res) {
  res.sendfile(__dirname+'/index.html');
})
router.post('/', function(req, res) {
    //res.end(req.body.username);
    var newUser = new User();
    var username = req.body.username;
    var password = req.body.password;

     newUser.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
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