/* eslint-disable no-unused-vars,no-unused-expressions */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MemoryIcon from '@material-ui/icons/Memory'
import {
  Avatar, Button, Container, CssBaseline, Grid, TextField, Typography,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './resetPassStyle'
import { errorAllInputs, errorPass1Pass2, resetPasswordonServer } from '../../redux/actionCreators/userAC'

const ResetPass = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const successForHistory = useSelector((state) => state.users.successForHistory)
  const [formData, setFormData] = useState({
    password1: '',
    password2: '',
    token: '',
  })

  const { password1, password2 } = formData
  const { token } = useParams()

  useEffect(() => {
    if (token) {
      setFormData(({
        ...formData,
        token,
      }))
    }
  }, [])

  const changeHandler = (text) => ({ target: { value } }) => {
    setFormData({ ...formData, [text]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (password1 && password2) {
      if (password1 === password2) {
        dispatch(resetPasswordonServer(password1, token))
        setFormData({
          ...formData,
          password1: '',
          password2: '',
        })
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
        ? history.push('/login')
        : null
    }, 2000)
  }, [successForHistory])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MemoryIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Новый пароль
        </Typography>
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
        <form
          onSubmit={submitHandler}
          className={classes.form}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Введите новый пароль"
                type="password"
                id="password"
                value={password1}
                onChange={changeHandler('password1')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="confirmPassword"
                label="Подтвердите новый пароль"
                type="password"
                id="confirmPassword"
                value={password2}
                onChange={changeHandler('password2')}
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
            Подтвердить изменение пароля

          </Button>
        </form>
      </div>
    </Container>
  )
}

export default ResetPass
