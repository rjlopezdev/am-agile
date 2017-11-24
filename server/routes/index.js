const express = require('express')
const app = express()

/*
 * IMPORT CONTROLLER-ROUTES
 */
app.use(require('./user'))

module.exports = app
