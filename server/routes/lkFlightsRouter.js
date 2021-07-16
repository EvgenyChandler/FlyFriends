/* eslint-disable no-underscore-dangle */
const { Router } = require('express')

const router = Router()
const Flights = require('../models/flights.model')

router.post('/', async (req, res) => {
  const { id } = req.body
  const allFlights = await Flights.find({ user: id }).populate('user friend')
  const allFriendsFlight = await Flights.find({ friend: id })
  const counter = allFriendsFlight.filter((el) => el.new).length
  if (allFlights) {
    return res.json({ allFlights, counter }).status(200)
  }
  return res.sendStatus(401)
})

router.post('/friendsFlights', async (req, res) => {
  const { id } = req.body
  const allFlights = await Flights.find({ friend: id }).populate('user friend')
  if (allFlights) {
    return res.json(allFlights).status(200)
  }
  return res.sendStatus(401)
})

router.delete('/userFlights', async (req, res) => {
  const { id } = req.body
  await Flights.findByIdAndDelete(id)
  res.sendStatus(200)
})

router.patch('/', async (req, res) => {
  const { friendId, flight } = req.body
  const currentFlight = await Flights.findByIdAndUpdate(
    flight._id,
    { friend: friendId, new: true },
    { new: true },
  ).populate('user friend')
  if (currentFlight) {
    return res.json(currentFlight).status(200)
  }
  return res.sendStatus(401)
})

router.patch('/updNewStatus', async (req, res) => {
  const { id } = req.body
  await Flights.updateMany({ friend: id }, { new: false })
  res.sendStatus(200)
})

module.exports = router
