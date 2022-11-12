const mongoose = require("mongoose");

const database_url = process.env.MONGO_URI || "mongodb://localhost:27017/todo_app";

const database = mongoose.connect(database_url)

module.exports = database;