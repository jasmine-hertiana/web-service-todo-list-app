const users = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    signupAuth: async (request, response) => {
        try {
            const userData = request.body;

            passwordHashed = bcrypt.hashSync(request.body.password, 10)
            userData.password = passwordHashed
            const user = await new users(userData)
            user.save()

            response.json({
                message: "data created successfully"
            })

        } catch (error) {
            response.status(500).json({
                message: "failed created data coz internal error"
            })
            console.log(error);
        }
    },

    signinAuth: async (request, response) => {
        try {
            const userData = await request.body
            const user = await users.findOne({ email: userData.email })
            if (user) {
                const passwordChecked = bcrypt.compareSync(userData.password, user.password);

                if (passwordChecked) {
                    const token = jwt.sign(
                        {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }, "goldenhour", { expiresIn: '20h'}
                    )

                    response.json({
                        message: "login success, welcome!",
                        token
                    })
                } else {
                    response.status(500).json({
                        message: 'your token expired'
                    })
                }
            } else {
                response.status(400).json({
                    message: 'cant login coz your email or password went wrong'
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
}