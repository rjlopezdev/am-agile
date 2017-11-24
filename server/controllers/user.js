'use strict'

const User = require('../models/user')
const jwt = require('../services/jwt')
const bcrypt = require('bcrypt')

function signUp (req, res) {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  })

  user.save((err) => {
    if (err) {
      return res.status(500).send({message: `Error on create user: ${err}`})
    }
    return res.status(200).send({token: jwt.createToken(user)})
  })
}

module.exports = {
  signUp
}
