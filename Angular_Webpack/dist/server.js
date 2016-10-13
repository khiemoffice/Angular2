
var express = require('express');
var path       = require('path');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var todos = require('./routes/todos');


var app = express();

//view Engine

app.set('views', path.join(__dirname, '../dist'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/contact', todos);

app.listen(3003, function(){
    console.log('Server started');
})
