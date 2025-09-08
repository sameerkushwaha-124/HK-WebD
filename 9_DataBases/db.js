const mongoose = require("mongoose")                        //mongoose library ko import kiye

const User = new mongoose.Schema({                                   //User ke andar kya hona hai like its structure isliy yeh bnaye 
    email: {type: String, unique: true},                    //unique hona chahiye and unique hona bhi jruri hai
    password: String,
    name: String
})

const Todo = new mongoose.Schema({                                   //Yeh todo ka structure 
    title: String,
    done: Boolean,
    userId: mongoose.ObjectId
})

const UserModel =  mongoose.model('Users', User);           //hmare ko kaunse collection mein rakhna hai data ko mongoDb mai so ussi ko mongoose.model se bta re ki users ke andar rkhna hai aur User uska schema 
const TodoModel =  mongoose.model('Todos', Todo);           //same with this ki todos collection pe store krna hai..aur Todo uska schema 

module.exports = {                                          //exporting a module jisse I can use it in injex.js file aur ek object ko export kr rhe jispe UserModel aur TodoModel dono hai
    UserModel: UserModel,
    TodoModel: TodoModel
}