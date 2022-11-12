const express = require('express')
const database = require("./config/database");
const app = express()
const allRouter = require('./routes')
// const database = require('./config/database')

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(allRouter)

database.then(() => {
    console.log('connect database successfully !');
}).catch((error) => {
    console.log(error);
})

app.listen(port, () => {
    console.log('server running at http://localhost:'+ port)
})