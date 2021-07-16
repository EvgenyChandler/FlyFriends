/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
const { Router } = require('express')
const User = require('../models/User.model')

const router = Router()

router.post('/', async (req, res) => {
  const { text, id } = req.body
  if (text.trim() === '') {
    return res.json([]).status(200)
  }
  const allUsers = await User.find()

  const users = allUsers
    .filter((el) => {
      if (el.name.toLowerCase().includes(text.toLowerCase().trim())
      && String(el._id) !== String(id)) {
        return el
      }
    })
  let myFriends = await User.findById(id)
  if (!myFriends?.friends?.length) return res.json(users).status(200)
  myFriends = myFriends.friends.map((el) => String(el))
  const usersWithFriends = users.map((el) => {
    if (myFriends.includes(String(el._id))) {
      const {
        role, name, email, _id, avatar,
      } = el
      return {
        role, name, email, _id, avatar, status: true,
      }
    }
    return el
  })
  return res.json(usersWithFriends).status(200)
})

router.post('/addFriend', async (req, res) => {
  const { friendId, userId } = req.body
  const user = await User.findById(userId)
  const friend = await User.findById(friendId)
  user.friends.push(friendId)
  friend.friends.push(userId)
  await user.save()
  await friend.save()
  res.sendStatus(200)
})

router.delete('/', async (req, res) => {
  const { friendId, userId } = req.body
  const user = await User.findById(userId)
  const friend = await User.findById(friendId)
  const newFriends = user.friends.filter((el) => String(el) !== String(friendId))
  const newFriendsForFriend = friend.friends.filter((el) => String(el) !== String(userId))
  await User.findByIdAndUpdate(userId, { friends: newFriends })
  await User.findByIdAndUpdate(friendId, { friends: newFriendsForFriend })
  res.sendStatus(200)
})

router.post('/getFriends', async (req, res) => {
  const { id } = req.body
  const user = await User.findById(id).populate('friends')
  if (user?.friends) {
    res.json(user.friends).status(200)
  } else {
    res.json([]).status(200)
  }
})

module.exports = router
