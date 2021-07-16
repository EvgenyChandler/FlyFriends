/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const fetch = require('node-fetch')
const { Router } = require('express')
const Iata = require('../models/iata.model')
const Fligths = require('../models/flights.model')

const router = Router()

router.get('/', async (req, res) => {
  const cities = await Iata.find()
  res.status(200).json(cities)
})

router.post('/', async (req, res) => {
  const { user, friend, date } = req.body
  const startMonthDate = date.slice(0, 7)

  const resFromUserToFriend = await fetch(`${process.env.TRAVEL_PAYOUTS_URL}?depart_date=${startMonthDate}&origin=${user}&destination=${friend}&calendar_type=departure_date`, {
    mode: 'no-cors',
    headers: {
      'X-Access-Token': `${process.env.TRAVEL_PAYOUTS_KEY}`,
    },
  })
  const fromUserToFriend = await resFromUserToFriend.json()
  const nameUserCity = await Iata.findOne({ code: user })

  const resFromFriendToUser = await fetch(`${process.env.TRAVEL_PAYOUTS_URL}?depart_date=${startMonthDate}&origin=${friend}&destination=${user}&calendar_type=departure_date`, {
    mode: 'no-cors',
    headers: {
      'X-Access-Token': `${process.env.TRAVEL_PAYOUTS_KEY}`,
    },
  })
  const fromFriendToUser = await resFromFriendToUser.json()
  const nameFriendCity = await Iata.findOne({ code: friend })
  if (
    // !Object.keys(fromUserToFriend.data).length
  // || !Object.keys(fromFriendToUser.data).length
    !nameFriendCity
  || !nameUserCity) {
    return res.sendStatus(500)
  }

  res.status(200).json({
    fromUserToFriend: {
      ...fromUserToFriend.data[date],
      origin_name: nameUserCity.name,
      destination_name: nameFriendCity.name,
    },
    fromFriendToUser: {
      ...fromFriendToUser.data[date],
      origin_name: nameFriendCity.name,
      destination_name: nameUserCity.name,
    },
  })
})

router.post('/addMiddle', async (req, res) => {
  const {
    origin,
    destination,
    origin_name,
    destination_name,
    departure_at,
    price,
    type,
    id,
  } = req.body
  if (type === 'fromUserToFriend') {
    const userFligth = await Fligths.create({
      type,
      userCityFrom: origin_name,
      userCityCodeFrom: origin,
      userCityTo: destination_name,
      userCityCodeTo: destination,
      date: departure_at.slice(0, 10),
      price,
      user: id,
    })
    if (userFligth) {
      return res.sendStatus(200)
    }
    return res.sendStatus(401)
  } if (type === 'fromFriendToUser') {
    const friendFlight = await Fligths.create({
      type,
      friendCityFrom: origin_name,
      friendCityCodeFrom: origin,
      friendCityTo: destination_name,
      friendCityCodeTo: destination,
      date: departure_at.slice(0, 10),
      price,
      user: id,
    })
    if (friendFlight) {
      return res.sendStatus(200)
    }
    return res.sendStatus(401)
  }
  return res.sendStatus(401)
})

router.post('/AddTwoCities', async (req, res) => {
  const { userFlight, friendFlight, id } = req.body
  const flight = await Fligths.create({
    userCityFrom: userFlight.origin_name,
    friendCityFrom: friendFlight.origin_name,
    userCityCodeFrom: userFlight.origin,
    friendCityCodeFrom: friendFlight.origin,
    userCityTo: userFlight.name,
    friendCityTo: friendFlight.name,
    userCityCodeTo: userFlight.destination,
    friendCityCodeTo: friendFlight.destination,
    date: userFlight.depart_date,
    userPrice: userFlight.value,
    friendPrice: friendFlight.value,
    user: id,
  })
  if (flight) {
    return res.sendStatus(200)
  }
  return res.sendStatus(401)
})

module.exports = router

router.post('/iata', async (req, res) => {
  if (req.body.origin && req.body.destination) {
    const { origin, destination } = req.body
    const userCity = await Iata.findOne({ name: origin })
    const friendCity = await Iata.findOne({ name: destination })
    if (userCity && friendCity) {
      res.json({
        origin: {
          iata: userCity.code,
        },
        destination: {
          iata: friendCity.code,
        },
      }).status(200)
    } else if (userCity && !friendCity) {
      res.json({
        origin: {
          iata: userCity.code,
        },
      }).status(200)
    } else if (!userCity && friendCity) {
      res.json({
        destination: {
          iata: friendCity.code,
        },
      }).status(200)
    } else {
      res.sendStatus(401)
    }
  }
})
