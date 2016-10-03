"use strict";
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var mongooseUrl = 'mongodb://root:123456@ds023438.mlab.com:23438/ecommerce_database';
var port = process.env.PORT || 3000;
var app = express();
var User = require('./model/user');
mongoose.connect(mongooseUrl, function (err) {
    err && console.log(err) || console.log('Connected to database');
});
//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/', express.static(path.resolve(__dirname)));
app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));
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
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.use(express.static(__dirname));
app.listen(port, function () {
    console.log('The express app is listening on port: ', port);
});

//# sourceMappingURL=data:application/json;base64,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TyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0FBQ2xDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMvRCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5pbXBvcnQgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcbmltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5cclxuXHJcblxyXG52YXIgbW9uZ29vc2VVcmw9J21vbmdvZGI6Ly9yb290OjEyMzQ1NkBkczAyMzQzOC5tbGFiLmNvbToyMzQzOC9lY29tbWVyY2VfZGF0YWJhc2UnO1xyXG52YXIgcG9ydDogbnVtYmVyID0gcHJvY2Vzcy5lbnYuUE9SVCB8fDMwMDA7XHJcbnZhciBhcHAgPSBleHByZXNzKCk7XHJcblxyXG52YXIgVXNlciA9IHJlcXVpcmUoJy4vbW9kZWwvdXNlcicpOyBcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QobW9uZ29vc2VVcmwsZnVuY3Rpb24oZXJyKXtcclxuICAgIGVyciYmY29uc29sZS5sb2coZXJyKXx8Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBkYXRhYmFzZScpXHJcbn0pXHJcbi8vTWlkZGxld2FyZVxyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpO1xyXG5hcHAudXNlKCcvYXBwJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2FwcCcpKSk7XHJcbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lKSkpO1xyXG5hcHAudXNlKCcvbm9kZV9tb2R1bGVzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpKSk7XHJcblxyXG5cclxuYXBwLnBvc3QoJy9jcmVhdGUtdXNlcicsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KXtcclxuICAgIHZhciB1c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHVzZXIucHJvZmlsZS5uYW1lID0gcmVxLmJvZHkubmFtZTtcclxuICAgIHVzZXIucGFzc3dvcmQgICAgID0gcmVxLmJvZHkucGFzc3dvcmQ7XHJcbiAgICB1c2VyLmVtYWlsICAgICAgICA9IHJlcS5ib2R5LmVtYWlsO1xyXG5cclxuICAgIHVzZXIuc2F2ZShmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgIGlmKGVycikgcmV0dXJuIG5leHQoZXJyKTtcclxuICAgICAgICByZXMuanNvbignU3VjY2Vzc2Z1bCBjcmVhdGUgYSAgbmV3IHVzZXInKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuYXBwLmdldCgnLyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk9PntcclxuICAgIGNvbnNvbGUubG9nKCdkYXkgbGEnKTtcclxuICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpKTtcclxufSlcclxuXHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSkpXHJcbmFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdUaGUgZXhwcmVzcyBhcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6ICcsIHBvcnQpXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
