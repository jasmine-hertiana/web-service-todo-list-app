const mongoose = require('mongoose')
const { Schema } = mongoose

const skemaUser = new Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
})

const user = mongoose.model("user", skemaUser)

module.exports = user