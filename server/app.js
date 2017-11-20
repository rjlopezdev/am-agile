'use strict'

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const controllers = require('./routes')
const config = require('./config')

const app = express()

mongoose.connect(config.MONGODB, { useMongoClient: true }, (err, res) => {
  if (err) {
    console.log(`Database error connection ${err}`)
  } else {
    console.log('Database connection successfully')

    app.listen(config.PORT, () => {
      console.log(`Server listening on ${config.PORT}`)
    })
  }
})

// Parse options
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Set static files
app.use(express.static(path.join(__dirname, 'public')))

// Dev settings
app.use(logger('dev'))

// Controllers initialization
app.use('/', controllers)

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send({error: err})
})

module.exports = app
