var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    router = express.Router();


var app = express();
mongoose.connect('mongodb://root:123456@ds029814.mlab.com:29814/admindata');
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ');
}); 

var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

//router
var routes_index = require('./routers/index');
router.use('/', routes_index );


// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticRoot));

app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

//app.all('/*', function(req, res, next) {
//    res.sendFile('index.html', { root: __dirname + '/' });
//});



app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});