const express = require('express');
const router = express.Router()

const authRoute = require('./auth.router')
const todolistRoute = require('./todo_list.router')
const userRoute = require('./user.router')

router.use("/auth", authRoute)
router.use("/todolist", todolistRoute)
router.use("/users", userRoute)

module.exports = router;