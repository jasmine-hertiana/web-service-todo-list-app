const express = require('express')
const todolistRoute = express.Router();

const { 
    getAllTodos, 
    getTodoById, 
    addTodo, 
    updateTodo, 
    deleteTodo, 
    deleteAllTodos 
} = require('../controllers/todo_list.controller')

todolistRoute.get("/", getAllTodos)
todolistRoute.get("/:id", getTodoById)
todolistRoute.post("/", addTodo)
todolistRoute.put("/:id", updateTodo)
todolistRoute.delete("/:id", deleteTodo)
todolistRoute.delete("/", deleteAllTodos)

module.exports = todolistRoute