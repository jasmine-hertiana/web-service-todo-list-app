const mongoose = require('mongoose')
const { Schema } = mongoose

const skemaToDoList = new Schema({
    headline: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    user: {
        type : mongoose.ObjectId,
        ref : "user"
    }
})

const ToDoList = mongoose.model("todo_list", skemaToDoList)

module.exports = ToDoList