const express = require('express')
const authRoute = express.Router();

const { signupAuth, signinAuth } = require('../controllers/auth.controller')

authRoute.post("/signup", signupAuth)
authRoute.post("/signin", signinAuth)

module.exports = authRoute