/* eslint-disable no-unused-vars,no-unused-expressions,no-use-before-define */
import axios from 'axios'
import { cssTransition, toast } from 'react-toastify'
import {
  BUTTON_PROCESS_ACTIVATION,
  BUTTON_PROCESS_FORGOT,
  BUTTON_PROCESS_LOGIN,
  BUTTON_PROCESS_REGISTRATION,
  LOGOUT_USER,
  SET_USER, SUCCESS_FOR_HISTORY,
} from '../types/type'
import { authenticate, removeLocalStorage, setLocalStorage } from '../../helpers/auth'

const swirl = cssTransition({
  enter: 'swirl-in-fwd',
  exit: 'swirl-out-bck',
})

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const logOut = () => ({
  type: LOGOUT_USER,
})

export const buttonProcessRegistration = (text) => ({
  type: BUTTON_PROCESS_REGISTRATION,
  payload: text,
})

export const buttonProcessLogin = (text) => ({
  type: BUTTON_PROCESS_LOGIN,
  payload: text,
})

export const buttonProcessForgot = (text) => ({
  type: BUTTON_PROCESS_FORGOT,
  payload: text,
})

export const buttonProcessActivation = (text) => ({
  type: BUTTON_PROCESS_ACTIVATION,
  payload: text,
})

export const forHistory = () => ({
  type: SUCCESS_FOR_HISTORY,
})

// Предварительная регистрация пользователя и отправка письма на почту
export const registrationUserOnServer = (name, email, password1, city) => async (dispatch) => {
  dispatch(buttonProcessRegistration('Регистрирую...'))
  await axios.post(`${process.env.REACT_APP_API_URL}/registration`, {
    name,
    email,
    password: password1,
    city,
  })
    .then((res) => {
      dispatch(buttonProcessRegistration('Успешно!'))
      dispatch(forHistory())
      toast.success(`🦄 ${res.data.message}`, {
        transition: swirl,
      })
    })
    .catch((error) => {
      dispatch(buttonProcessRegistration('Зарегистрироваться'))
      toast.error(`💩 ${error.response.data.errors}`, {
        transition: swirl,
      })
    })
}

// Активация пользователя и запись его в базу
export const activationUserOnServer = (token) => async (dispatch) => {
  dispatch(buttonProcessActivation('Активирую...'))
  await axios.post(`${process.env.REACT_APP_API_URL}/activation`, { token })
    .then((res) => {
      dispatch(buttonProcessActivation('Успешно!'))
      dispatch(setUser(res.data.user))
      authenticate(res)
      toast.success(`🦄 ${res.data.message}`, {
        transition: swirl,
      })
    })
    .catch((error) => {
      dispatch(buttonProcessActivation('Активация не удалась. Ошибка.'))
      toast.error(error.response.data.errors, {
        transition: swirl,
      })
    })
}

// Авторизация пользователя
export const loginUserOnServer = (email, password) => async (dispatch) => {
  dispatch(buttonProcessLogin('Авторизую...'))
  await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
    email,
    password,
  })
    .then((res) => {
      dispatch(setUser(res.data.user))
      dispatch(success(res))
      setLocalStorage('token', res.data.token)
      authenticate(res)
    })
    .catch((error) => {
      dispatch(buttonProcessLogin('Войти'))
      toast.error(`💩 ${error.response.data.errors}`, {
        transition: swirl,
      })
    })
}

// Проверка токена пользователя (аутентификация на сервере)
export const authUserOnServer = () => async (dispatch) => {
  await axios.get(`${process.env.REACT_APP_API_URL}/auth`, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
    .then((res) => {
      dispatch(setUser(res.data.user))
      setLocalStorage('token', res.data.token)
    })
    .catch((error) => {
      console.log('Пользователь не авторизован')
    })
}

// Восстановление пароля
export const forgotPasswordonServer = (email) => async (dispatch) => {
  dispatch(buttonProcessForgot('Восстанавливаю...'))
  await axios.put(`${process.env.REACT_APP_API_URL}/forgot`, {
    email,
  })
    .then(() => {
      dispatch(forHistory())
      dispatch(buttonProcessForgot('Успешно, ссылка на почте.'))
      toast.success('🦄 На ваш email отправлено письмо для сброса пароля  ', {
        transition: swirl,
      })
    })
    .catch((err) => {
      toast.error(err.response.data.errors, {
        transition: swirl,
      })
    })
}

// Сброс пароля
export const resetPasswordonServer = (password1, token) => async (dispatch) => {
  await axios.put(`${process.env.REACT_APP_API_URL}/reset`, {
    newPassword: password1,
    resetPasswordLink: token,
  }).then((res) => {
    dispatch(forHistory())
    toast.success(`🦄 ${res.data.message}`, {
      transition: swirl,
    })
  }).catch((error) => {
    console.log(error.response.data.errors)
    toast.error(`${error.response.data.errors}`, {
      transition: swirl,
    })
  })
}

// Загрузка аватарки
export const avatarUploadOnServer = (file, id) => async (dispatch) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('id', id)
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/avatar`, formData)
  dispatch(setUser(response.data))
  setLocalStorage('user', response.data)
}

// Удаление аватарки
export const deleteAvatarFromServer = (id) => async (dispatch) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/avatar/delete`, {
    id,
  })
  dispatch(setUser(response.data))
}

// ----- ОШИБКИ -----
export const errorAllInputs = () => async () => {
  await toast.error('💩 Необходимо заполнить все поля', {
    transition: swirl,
  })
}

export const errorEmailInput = () => async () => {
  await toast.error('💩 Необходимо указать email для восстановления пароля', {
    transition: swirl,
  })
}

export const errorPass1Pass2 = () => async () => {
  await toast.error('💩 Пароли не совпадают!', {
    transition: swirl,
  })
}

// ----- СООБЩЕНИЕ ОБ УСПЕХЕ ------
export const success = (res) => async () => {
  await toast.success(`🦄 ${res.data.user.name}, добро пожаловать назад!`, {
    transition: swirl,
  })
}
