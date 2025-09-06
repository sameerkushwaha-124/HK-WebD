const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sameerkushwaha2003:H7VyvWcApzwvlvKR@cluster0.wzoj11d.mongodb.net/todos')
.then(function(){
    console.log('Databases Connected successfully.')
}).catch(function (err){
    console.log("Encounter Error : " + err);
})


const TodoSchema = mongoose.Schema({
    title : String,
    descreption : String,
    completed : Boolean
})

const Todo = mongoose.model('Todo', TodoSchema); 

module.exports = {
    Todo : Todo    // if left and right side of the object is same then we can write only Todo.
}