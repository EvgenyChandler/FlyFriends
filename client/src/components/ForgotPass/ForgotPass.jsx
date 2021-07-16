/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import {
  Avatar, Button, Container, CssBaseline, Grid, TextField, Typography,
} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './forgotPassStyle'
import { errorEmailInput, forgotPasswordonServer } from '../../redux/actionCreators/userAC'

const ForgotPass = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const successForHistory = useSelector((state) => state.users.successForHistory)
  const textOnForgotButton = useSelector((state) => state.users.textOnForgotButton)
  const [formData, setFormData] = useState({
    email: '',
  })

  const { email } = formData

  const changeHandler = (text) => ({ target: { value } }) => {
    setFormData({ ...formData, [text]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (email) {
      dispatch(forgotPasswordonServer(email))
      setFormData({
        ...formData,
        email: '',
      })
    } else {
      dispatch(errorEmailInput())
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
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Восстановление пароля
          </Typography>
          <form
            onSubmit={submitHandler}
            className={classes.form}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  value={email}
                  onChange={changeHandler('email')}
                  label="Введите почту"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
              {textOnForgotButton}

            </Button>
          </form>
        </div>
      </Container>
    </>
  )
}

export default ForgotPass
