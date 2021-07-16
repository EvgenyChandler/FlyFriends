/* eslint-disable no-unused-expressions,no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { NavLink, useHistory } from 'react-router-dom'
import { cssTransition, toast, ToastContainer } from 'react-toastify'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { ImFacebook, FcGoogle } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, isAuth } from '../../helpers/auth'
import useStyles from './loginStyle'
import {
  errorAllInputs, loginUserOnServer, setUser, success,
} from '../../redux/actionCreators/userAC'
import './loginCss.css'
import CssTextField from '../../hooks/myMaterialComps'

const swirl = cssTransition({
  enter: 'swirl-in-fwd',
  exit: 'swirl-out-bck',
})

export default function LoginPage() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()
  const textOnButton = useSelector((state) => state.users.textOnLoginButton)
  const isAuthState = useSelector((state) => state.users.isAuthState)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const changeHandler = (text) => ({ target: { value } }) => {
    setFormData({ ...formData, [text]: value })
  }

  // Если все "ок" то авторизуем и перенаправляем в профиль
  const informParent = (response) => {
    dispatch(success(response))
    setTimeout(() => {
      authenticate(response)
      dispatch(setUser(response.data.user))
      isAuth() ? history.push('/') : history.push('/registration')
    }, 2500)
  }

  // Отправка токена в Facebook
  const facebookToken = (userID, accessToken) => {
    axios.post(`${process.env.REACT_APP_API_URL}/facebooklogin`, {
      userID,
      accessToken,
    }).then((res) => {
      informParent(res)
    })
      .catch((error) => {
        console.log('ERROR', error)
        toast.error('💩 Ошибка авторизации через facebook', {
          transition: swirl,
        })
      })
  }

  // Получаем ответ от facebook
  const responseFacebook = (response) => {
    facebookToken(response.userID, response.accessToken)
  }

  // Отправка токена в google
  const sendGoogleToken = (tokenId) => {
    axios.post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
      idToken: tokenId,
    }).then((res) => {
      informParent(res)
    })
      .catch((error) => {
        toast.error('💩 Ошибка авторизации через google', {
          transition: swirl,
        })
      })
  }

  // Получаем ответ от google
  const responseGoogle = (response) => {
    sendGoogleToken(response.tokenId)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (email && password) {
      setFormData({ ...formData })
      dispatch(loginUserOnServer(email, password))
      setFormData({
        ...formData,
        email: '',
        password: '',
      })
    } else {
      dispatch(errorAllInputs())
    }
  }

  useEffect(() => {
    setTimeout(() => {
      isAuthState
        ? history.push('/')
        : null
    }, 2000)
  }, [isAuthState])

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
            Войти
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={changeHandler('email')}
              label="Введите почту"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                style: { color: 'rgba(0, 0, 0, 0.6)' },
              }}
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={changeHandler('password')}
              label="Введите пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: 'rgba(0, 0, 0, 0.6)' },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {textOnButton}
            </Button>
          </form>
          <Grid item xs={12}>
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              render={(renderProps) => (
                <Button
                  className="border-button-login"
                  onClick={renderProps.onClick}
                >
                  <span className="myBigIcon">
                    <FcGoogle />
                  </span>
                  <Typography style={{ textTransform: 'none' }}>
                    Войти с помощью Google
                  </Typography>
                </Button>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FacebookLogin
              appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <Button
                  className="border-button-login"
                  onClick={renderProps.onClick}
                >
                  <span style={{ borderColor: '1px solid black' }} className="myBigIconF">
                    <ImFacebook />
                  </span>
                  <Typography style={{ textTransform: 'none' }}>
                    Войти с помощью Facebook
                  </Typography>
                </Button>
              )}
            />
          </Grid>
          <Grid container>
            <Grid item xs>
              <NavLink className={classes.linkToText} to="/forgot" variant="body2">
                <Typography variant="h7">
                  Забыл пароль?
                </Typography>
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink className={classes.linkToText} to="/registration" variant="body2">
                <Typography variant="h7">
                  У тебя нет аккаунта? Зарегистрироваться
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}
