import { Route, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Main from './components/Main/Main'
import ProfilePage from './components/ProfilePage/ProfilePage'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import useStyles from './hooks/useStyles'
import useTheme from './hooks/useTheme'
import ModaleDelete from './components/DeleteModal/DeleteModal'
import ActivationMain from './components/ActivationMain/ActivationMain'
import ForgotPass from './components/ForgotPass/ForgotPass'
import ResetPass from './components/ResetPass/ResetPass'
import { authUserOnServer } from './redux/actionCreators/userAC'

const useRoutes = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isAuthState = useSelector((state) => state.users.isAuthState)

  useEffect(() => {
    dispatch(authUserOnServer())
  }, [])

  return (
    <ThemeProvider theme={useTheme}>
      <div className={classes.bodyRoot}>
        <Navbar />
        <ModaleDelete />
        <Switch>
          <Route exact path="/profile" component={isAuthState ? ProfilePage : Main} />
          <Route exact path="/login" component={!isAuthState ? LoginPage : Main} />
          <Route exact path="/registration" component={!isAuthState ? RegistrationPage : ProfilePage} />
          <Route exact path="/forgot" component={!isAuthState ? ForgotPass : Main} />
          <Route exact path="/activation/:token" component={!isAuthState ? ActivationMain : Main} />
          <Route exact path="/reset/:token" component={!isAuthState ? ResetPass : ProfilePage} />
          <Route exact path="/" component={Main} />
          <Route exact component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default useRoutes
