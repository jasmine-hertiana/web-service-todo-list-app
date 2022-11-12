const express = require('express');
const router = express.Router()

const authRoute = require('./auth.router')
const todolistRoute = require('./todo_list.router')

router.use("/auth", authRoute)
router.use("/todolist", todolistRoute)

module.exports = router;