/* eslint-disable consistent-return */
const mongoose = require('mongoose')
const { dbConnectionURL, options } = require('./dbConfig')

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log(`Database has been connected: ${process.env.mongoDBname}`)
  })
}

module.exports = dbConnect
