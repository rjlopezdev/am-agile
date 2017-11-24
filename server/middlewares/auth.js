'use strict'

const jwt = require('../services/jwt')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({message: `Unauthorized`})
  }
  const token = req.headers.authorization.split(' ')[1]

  jwt.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(err => {
      return res.status(err.status)
    })
}

module.exports = {
  isAuth
}
