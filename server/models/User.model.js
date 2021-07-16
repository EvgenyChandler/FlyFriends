/* eslint-disable no-underscore-dangle,space-before-function-paren,object-shorthand,func-names */
const { Schema, model } = require('mongoose')
const crypto = require('crypto')

const schemaUser = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
    default: '',
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
  role: {
    type: String,
    default: 'Standart',
  },
  resetPasswordLink: {
    data: String,
    default: '',
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true })

schemaUser
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

// Методы
schemaUser.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },

  // Шифруем пароль
  encryptPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },

  // Генерируем "соль"
  makeSalt: function() {
    return `${Math.round(new Date().valueOf() * Math.random())} `
  },
}

module.exports = model('User', schemaUser)
