const { Schema, model } = require('mongoose')

const flightsSchema = new Schema({
  type: String,
  userCityFrom: String,
  friendCityFrom: String,
  userCityCodeFrom: String,
  friendCityCodeFrom: String,
  userCityTo: String,
  friendCityTo: String,
  userCityCodeTo: String,
  friendCityCodeTo: String,
  date: String,
  price: Number,
  userPrice: Number,
  friendPrice: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  friend: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  new: {
    type: Boolean,
    default: false,
  },
})

const Fligths = model('Fligths', flightsSchema)
module.exports = Fligths
