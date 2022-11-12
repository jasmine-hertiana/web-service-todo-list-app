const todolists = require("../models/todo_list")
const jwt = require('jsonwebtoken')

module.exports = {
    getAllTodos: async (request, response) => {
        try {
            const todolist = await todolists.find({}).populate("user", "name")
            response.json({
                message: "there are todo lists",
                data: todolist
            })
        } catch (error) {
            response.status(404).json({
                message: "todo lists not found",
                error: error.message
            })
        }
    },

    getTodoById: async (request, response) => {
        try {
            const todolist = await todolists.findById({ 
                _id: request.params.id 
            }).populate("user", "name")

            response.json({
                message: "get todo list data",
                data: todolist
            })
        } catch (error) {
            response.status(404).json({
                message: "todo list data not found",
                error: error.message
            })
        }
    },

    addTodo: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isValid = jwt.verify(token, "goldenhour")
            console.log(isValid);
            const todolistdata = request.body
            const todolist = await new todolists(todolistdata)
            todolist.save()

            response.status(201).json({
                message: "todo list data created successfully"
            })

        } catch (error) {
            response.status(400).json({
                message: "failed create todo list data"
            })
        }
    },

    updateTodo: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isValid = jwt.verify(token, "goldenhour")
            console.log(isValid);
            const todolistdata = request.body
            const todolist = await todolists.findOne({ 
                _id: request.params.id 
            })

            if (todolist) {
                await todolists.updateOne({
                    headline: todolistdata.headline,
                    description: todolistdata.description
                })

                await todolist.save();

                response.json({
                    message: "todo list data updated successfully"
                })
            }
        } catch (error) {
            response.status(400).json({
                message: "failed update todo list data"
            })
        }
    },

    deleteTodo: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isValid = jwt.verify(token, "goldenhour")
            console.log(isValid);
            const todolist = await todolists.findOneAndDelete({
                _id: request.params.id,
            })

            response.json({
                message: "todo list data deleted successfully",
                data: todolist
            })
        } catch (error) {
            response.status(500).json({
                message: "failed delete todo list data",
                error: error.message
            })
        }
    },   
    
    deleteAllTodos: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isValid = jwt.verify(token, "goldenhour")
            console.log(isValid);
            const todolist = await todolists.deleteMany({})
            response.json({
                message: "all todo list data deleted successfully",
                data: todolist
            })
        } catch (error) {
            response.status(500).json({
                message: "failed delete all todo list data",
                error: error.message
            })
        }
    },
}