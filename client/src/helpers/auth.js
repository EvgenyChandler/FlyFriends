/* eslint-disable consistent-return,no-unused-vars */

// Запись в localStorage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

// Удаление из localStorage
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key)
}

// Аутентификация пользователя из localstorage после логина
export const isAuth = () => {
  const localStorageUser = localStorage.getItem('user')
  if (localStorageUser) {
    return JSON.parse(localStorage.getItem('user'))
  }
  return false
}

// Аутентификация токена из localstorage
export const isToken = () => {
  const localStorageToken = localStorage.getItem('token')
  if (localStorageToken) {
    return JSON.parse(localStorage.getItem('token'))
  }
  return false
}

// Запись localstorage
export const authenticate = (response) => {
  setLocalStorage('user', response.data.user)
  setLocalStorage('token', response.data.token)
}

// Выход пользователя из системы с очисткой localstorage
export const signOut = (next) => {
  removeLocalStorage('user')
  removeLocalStorage('token')
  next()
}
