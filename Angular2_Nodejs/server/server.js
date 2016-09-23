"use strict";
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var mongooseUrl = 'mongodb://root:123456@ds023438.mlab.com:23438/ecommerce_database';
var port = process.env.PORT || 3000;
var app = express();
var User = require('../model/user');
mongoose.connect(mongooseUrl, function (err) {
    err && console.log(err) || console.log('Connected to database');
});
//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.post('/create-user', function (req, res, next) {
    var user = new User();
    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save(function (err) {
        if (err)
            return next(err);
        res.json('Successful create a  new user');
    });
});
app.get('/*', function (req, res) {
    console.log('day la');
    res.sendFile(path.resolve('../', 'client/index.html'));
});
app.use(express.static(__dirname));
app.listen(port, function () {
    console.log('The express app is listening on port: ', port);
});
