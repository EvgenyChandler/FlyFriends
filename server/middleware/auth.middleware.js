/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(401).json({ message: 'Ошибка авторизации. Нет токена!' })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded
    next()
  } catch (e) {
    return res.status(401).json({ message: 'Ошибка авторизации. Токен не верный!' })
  }
}
