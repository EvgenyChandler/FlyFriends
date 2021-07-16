/* eslint-disable no-underscore-dangle */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { ToastContainer } from 'react-toastify'
import useStyles from './profilePageStyle'
import ProfileFriendsAndTrip from './ProfileFriendsAndTrip/ProfileFriendsAndTrip'
import ProfileUser from './ProfileUser/ProfileUser'

export default function ProfilePage() {
  const classes = useStyles()

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

      <Grid container style={{ width: '100%', height: '100%' }} spacing={3}>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper} square="true" elevation={5}>
            <ProfileFriendsAndTrip />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>

          <ProfileUser />

        </Grid>
      </Grid>
    </>
  )
}
