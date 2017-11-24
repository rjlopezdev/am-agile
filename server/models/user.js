const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const UserSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, select: false, required: true},
  name: {type: String, required: true},
  surname: {type: String, required: true},
  avatar_url: {type: String},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: {type: Date}
})

UserSchema.pre('save', function (next) {
  var user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      // override the cleartext password with the hashed one
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)
