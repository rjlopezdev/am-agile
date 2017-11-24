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

function signIn (req, res) {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      return res.status(500).send({message: err})
    }

    if (!user) {
      return res.status(404).send({message: `User does not exists`})
    }

    bcrypt.compare(req.body.password, user.password)
      .then(function (match) {
        if (!match) {
          return res.status(400).send({message: `Invalid username or password`})
        }

        req.user = user
        return res.status(200).send({token: jwt.createToken(user)})
      })
  }).select('+password')
}

module.exports = {
  signUp,
  signIn
}
