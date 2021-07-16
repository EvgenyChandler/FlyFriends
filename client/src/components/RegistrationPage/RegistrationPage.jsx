/* eslint-disable react/jsx-props-no-spreading,no-unused-expressions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline,no-unused-vars */
import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './registrationStyle'
import { errorAllInputs, errorPass1Pass2, registrationUserOnServer } from '../../redux/actionCreators/userAC'
import { isAuth } from '../../helpers/auth'
import CssTextField from '../../hooks/myMaterialComps'

export default function RegistrationPage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const successForHistory = useSelector((state) => state.users.successForHistory)
  const textOnButton = useSelector((state) => state.users.textOnRegButton)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const [town, setTown] = useState('')

  const { name, email, password1, password2 } = formData

  const changeHandler = (text) => ({ target: { value } }) => {
    setFormData({ ...formData, [text]: value })
  }

  const [cityList, setCityList] = useState([])

  const onFocusCityHandler = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/search/city`)
    const citiesFromDB = await response.json()
    setCityList(citiesFromDB.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    }))
  }

  // Отправлять town на сервер, это город пользователя
  const submitHandler = async (e) => {
    e.preventDefault()
    if (name && email && password1 && password2) {
      if (password1 === password2) {
        dispatch(registrationUserOnServer(name, email, password1, town))
        // setFormData({
        //   ...formData,
        //   name: '',
        //   email: '',
        //   password1: '',
        //   password2: '',
        // })
      } else {
        dispatch(errorPass1Pass2())
      }
    } else {
      dispatch(errorAllInputs())
    }
  }

  useEffect(() => {
    setTimeout(() => {
      successForHistory
        ? history.push('/')
        : null
    }, 2000)
  }, [successForHistory])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AirplanemodeActiveIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Зарегистрироваться
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CssTextField
                  InputLabelProps={{
                    style: { color: 'rgba(0, 0, 0, 0.6)' },
                  }}
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  value={name}
                  onChange={changeHandler('name')}
                  label="Введите имя"
                  name="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  fullWidth
                  onFocus={onFocusCityHandler}
                  id="city 1"
                  freeSolo
                  options={cityList?.map((option) => option.name)}
                  renderInput={(params) => {
                    setTown(params.inputProps.value)
                    return (
                      <CssTextField
                        {...params}
                        fullWidth
                        required
                        label="Введите город"
                        variant="outlined"
                        InputLabelProps={{
                          style: { color: 'rgba(0, 0, 0, 0.6)' },
                        }}
                      />
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  value={email}
                  onChange={changeHandler('email')}
                  label="Введите email адрес"
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{
                    style: { color: 'rgba(0, 0, 0, 0.6)' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Введите пароль"
                  type="password"
                  id="password"
                  value={password1}
                  onChange={changeHandler('password1')}
                  autoComplete="current-password"
                  InputLabelProps={{
                    style: { color: 'rgba(0, 0, 0, 0.6)' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Подтвердите пароль"
                  type="password"
                  id="confirmPassword"
                  value={password2}
                  onChange={changeHandler('password2')}
                  InputLabelProps={{
                    style: { color: 'rgba(0, 0, 0, 0.6)' },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {textOnButton}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink className={classes.linkToText} to="/login" variant="body2">
                  <Typography variant="h7">
                    Уже есть аккаунт? Войти
                  </Typography>

                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  )
}
