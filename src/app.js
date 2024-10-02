const express = require('express')
const morgan = require('morgan')
const {default: helmet} = require('helmet')
const compression = require('compression')
const app = express()


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db

console.log("ahihi123")
// init routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Welcome Fantipjs!', // function để thông báo
    })
})

// handling errors
module.exports = app