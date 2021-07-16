/* eslint-disable object-curly-newline */
require('dotenv').config()

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}

const { mongoDBurl } = process.env

const dbConnectionURL = mongoDBurl

module.exports = {
  dbConnectionURL,
  options,
}
