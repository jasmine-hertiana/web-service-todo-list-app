const express = require('express')
const userRoute = express.Router();

const { 
    getAllUsers, 
    getUserById,
    updateUser, 
    deleteUser
} = require('../controllers/user.controller')

userRoute.get("/", getAllUsers)
userRoute.get("/:id", getUserById)
userRoute.put("/:id", updateUser)
userRoute.delete("/:id", deleteUser)

module.exports = userRoute