'use strict'

const express = require('express')
const app = express()
const userController = require('../controllers/user')

app.post('/signup', userController.signUp)

module.exports = app
