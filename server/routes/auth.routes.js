/* eslint-disable object-curly-newline */
const router = require('express').Router()

// Валидаторы
const { validLogin,
  validRegistration,
  validForgotPassword,
  validResetPassword } = require('../helpers/validation')

// Контроллеры
const { authController,
  registrationController,
  activationController,
  loginController,
  forgotController,
  resetController,
  googleController,
  facebookController } = require('../controllers/auth.controller')

// Мидлвара на проверку авторизации пользователя
const authMiddleware = require('../middleware/auth.middleware')

// Роуты
router.post('/registration', validRegistration, registrationController)
router.post('/activation', validRegistration, activationController)
router.post('/login', validLogin, loginController)
router.put('/forgot', validForgotPassword, forgotController)
router.put('/reset', validResetPassword, resetController)
router.get('/auth', authMiddleware, authController)

// Социальные роуты
router.post('/googlelogin', googleController)
router.post('/facebooklogin', facebookController)

module.exports = router
