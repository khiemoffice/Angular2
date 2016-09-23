import express = require('express');
import path = require('path');

import morgan = require('morgan');
import mongoose = require("mongoose");
import bodyParser = require('body-parser');



var mongooseUrl='mongodb://root:123456@ds023438.mlab.com:23438/ecommerce_database';
var port: number = process.env.PORT ||3000;
var app = express();

var User = require('../model/user'); 

mongoose.connect(mongooseUrl,function(err){
    err&&console.log(err)||console.log('Connected to database')
})
//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));


app.post('/create-user', function(req, res, next){
    var user = new User();
    user.profile.name = req.body.name;
    user.password     = req.body.password;
    user.email        = req.body.email;

    user.save(function(err){
        if(err) return next(err);
        res.json('Successful create a  new user');
    })
});

app.get('/*', (req: express.Request, res: express.Response)=>{
    console.log('day la');
    res.sendFile(path.resolve(__dirname, 'index.html'));
})


app.use(express.static(__dirname))
app.listen(port, function(){
    console.log('The express app is listening on port: ', port)
});