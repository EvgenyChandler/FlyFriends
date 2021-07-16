/* eslint-disable consistent-return */
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const User = require('../models/User.model')

exports.uploadAvatarController = async (req, res) => {
  try {
    const { file } = req.files
    const { id } = req.body
    const user = await User.findById(id)
    if (user.avatar) {
      const pathToDelete = `${process.env.PWD}/static/${user.avatar}`
      fs.unlinkSync(pathToDelete)
    }
    const avatarName = `${id}${uuidv4()}.jpg`
    const path = `${process.env.PWD}/static/${avatarName}`
    file.mv(path)
    user.avatar = avatarName
    await user.save()
    return res.json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'Ошибка загрузки аватара' })
  }
}

exports.deleteAvatarController = async (req, res) => {
  try {
    const user = await User.findById(req.body.id)
    const path = `${process.env.PWD}/static/${user.avatar}`
    fs.unlinkSync(path)
    user.avatar = null
    await user.save()
    return res.json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'Ошибка удаления аватара' })
  }
}
