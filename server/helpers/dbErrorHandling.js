/* eslint-disable no-restricted-syntax,no-undef,prefer-destructuring */
// Получаем уникальное поле из ошибки
const uniqueMessage = (error) => {
  let output
  try {
    const fieldName = error.message.split('.$')[1]
    field = field.split(' dup key')[0]
    field = field.substring(0, field.lastIndexOf('_'))
    req.flash('errors', [{
      msg: `Пользователь с данными ${field} уже существует.`,
    }])
    output = `${fieldName.charAt(0).toUpperCase()
      + fieldName.slice(1)
    } уже существует`
  } catch (ex) {
    output = 'Аккаунт уже активирован'
  }

  return output
}

// Получаем текст ошибки из объекта ошибки
exports.errorHandler = (error) => {
  let message = ''

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error)
        break
      default:
        message = 'Что-то пошло не так'
    }
  } else {
    for (const errorName in error.errors) {
      if (error.errors[errorName].message) message = error.errors[errorName].message
    }
  }

  return message
}
