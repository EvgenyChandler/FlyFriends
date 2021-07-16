/* eslint-disable no-unused-vars */
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink, useHistory } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './useStyles'
import { signOut } from '../../helpers/auth'
import { logOut } from '../../redux/actionCreators/userAC'
import './navbar.css'

function Navbar() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const isAuthState = useSelector((state) => state.users.isAuthState)

  return (
    <div className={classes.root}>
      <AppBar elevation="none" color="transparent" position="static" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/" className={classes.linkToButton}>
            <img src="../../LOGO_FF.png" alt="logopng" style={{ height: '7vh', paddingLeft: '30px' }} />
          </NavLink>
          <Typography className={classes.title} />
          {isAuthState ? (
            <Box>
              <NavLink to="/profile" className={classes.linkToButton}><Button>Личный кабинет</Button></NavLink>
              <Button
                color="inherit"
                onClick={() => {
                  signOut(() => {
                    history.push('/')
                  })
                  dispatch(logOut())
                }}
              >
                Выйти
              </Button>
            </Box>
          )
            : (
              <Box>
                <NavLink
                  style={{ paddingRight: '10px' }}
                  to="/login"
                  className={classes.linkToButton}
                >
                  <Button
                    className="border-buttonNav"
                  >
                    Вход
                  </Button>
                </NavLink>
                <NavLink
                  to="/registration"
                  className={classes.linkToButton}
                >
                  <Button
                    className="border-buttonNav"
                    color="inherit"
                  >
                    Регистрация
                  </Button>
                </NavLink>
              </Box>
            )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
