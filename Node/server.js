var express= require('express');

var port=process.env.PORT || 3000;
var app= express();
var cars=  require('./home_route');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User     = require('./models/user');


app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect('mongodb://root:123456@ds029814.mlab.com:29814/admindata');


app.use('/home', cars);

app.listen(port, function(err){
    console.log(err)
})
