const { Schema, model } = require('mongoose')

const iataSchema = new Schema({
  country_code: String,
  code: String,
  coordinates: {},
  name: String,
  time_zone: String,
  name_translations: {},
  cases: {},
})

const Iata = model('Iata', iataSchema)
module.exports = Iata
