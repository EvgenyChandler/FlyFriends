/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types,no-restricted-globals,no-shadow,no-unused-vars */
import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import jwt from 'jsonwebtoken'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {
  Avatar, Button, Container, CssBaseline, Typography,
} from '@material-ui/core'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth } from '../../helpers/auth'
import useStyles from './activationMainStyle'
import { activationUserOnServer } from '../../redux/actionCreators/userAC'

const ActivationMain = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const isAuthState = useSelector((state) => state.users.isAuthState)
  const textForButtonActivation = useSelector((state) => state.users.textForButtonActivation)
  const [formData, setFormData] = useState({
    name: '',
    token: '',
  })

  const { token } = useParams()
  const { name } = formData

  useEffect(() => {
    const name = jwt.decode(token)

    if (token) {
      setFormData({ ...formData, name, token })
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(activationUserOnServer(token))
  }

  useEffect(() => {
    setTimeout(() => {
      isAuthState
        ? history.push('/profile')
        : null
    }, 100)
  }, [isAuthState])

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactMailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Активация аккаунта
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
          <Typography component="h6" variant="h6" className={classes.helloBlock}>
            Привет,&nbsp;
            {name.name}
            !
          </Typography>
          <form
            onSubmit={submitHandler}
            className={classes.form}
            noValidate
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {textForButtonActivation}
            </Button>
          </form>
        </div>
      </Container>
    </>
  )
}

export default ActivationMain
