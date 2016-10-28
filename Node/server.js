var express= require('express');

var port=process.env.PORT || 3000;
var app= express();
var cars=  require('./home_route');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))


app.use('/home', cars);

app.listen(port, function(err){
    console.log(err)
})
