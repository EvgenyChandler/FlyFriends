const { check } = require('express-validator')

// Валидация регистрации
exports.validRegistration = [
  check('name', 'Имя - обязательное поле').notEmpty()
    .isLength({
      min: 4,
      max: 32,
    }).withMessage('Имя должно быть от 4 до 32 знаков'),
  check('email', 'Email - обязательное поле').notEmpty()
    .isEmail().withMessage('Должен быть корректный email'),
  check('password', 'Пароль обязательно должен быть заполнен').notEmpty(),
  check('password').isLength({
    min: 6,
  }).withMessage('Пароль должен быть от 6 символов').matches(/\d/)
    .withMessage('Пароль должен состоять из цифр'),
]

// Валидация авторизации
exports.validLogin = [
  check('email').isEmail().withMessage('Должен быть корректный email'),
  check('password', 'Пароль обязательно должен быть заполнен').notEmpty(),
  check('password').isLength({
    min: 6,
  }).withMessage('Пароль должен быть от 6 символов').matches(/\d/)
    .withMessage('Пароль должен состоять из цифр'),
]

// Валидация забытого пароля
exports.validForgotPassword = [
  check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Должен быть корректный email')]

// Валидация сброса пароля
exports.validResetPassword = [
  check('newPassword')
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Пароль должен быть от 6 символов')]
