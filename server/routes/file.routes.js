const router = require('express').Router()

// Контроллеры
const { uploadAvatarController, deleteAvatarController } = require('../controllers/file.controller')

// Роуты
router.post('/avatar', uploadAvatarController)
router.post('/avatar/delete', deleteAvatarController)

module.exports = router
