var express = require('express');
var router = express.Router();
var mongoUrl ='mongodb://root:123456@ds053216.mlab.com:53216/mean2app';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(mongoUrl);
var db = mongoose.connection;

// todo schema
var todoSchema = new Schema({
        text: String,
        IsCompleted: Boolean
});

var todoModel = mongoose.model('todo', todoSchema)

//get ALL TODOS
router.get('/', function(req, res, next){
    res.send('dsay la All TODO API');
    todoModel.find({},function(err, todos){
        if(err){
           return  res.send(err)
        }else{
           return res.json(todos);
        }
    })
});

//Get Single todo
router.get('/:id', function(req, res, next){
    res.send('dsay la Single TODO API');
    todoModel.findOne({ '_id':req.params.id },function(err, todo){
      console.log(todo)
    })
});

//Save TODO

router.post('./',  function(req, res, next){
    var todo= re.body;
    if(!todo.text || !(todo.IsCompleted+ '')){
        res.status = 400
    }else{
        todoModel.save(todo, function(err, result){

        })
    }


})


module.exports = router;