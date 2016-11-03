var express= require('express');

var port=process.env.PORT || 3001;
var app= express();
var cars=  require('./home_route');
var bodyParser = require('body-parser');
var morgan =require('morgan');
var mongoose   = require('mongoose');
var User     = require('./models/user');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


mongoose.connect('mongodb://root:123456@ds023438.mlab.com:23438/ecommerce_database', function(err){
  err&&console.log(err)||console.log('Connected to the server');
});


app.use('/', cars);

app.listen(port, function(err){
    console.log(err)
})
