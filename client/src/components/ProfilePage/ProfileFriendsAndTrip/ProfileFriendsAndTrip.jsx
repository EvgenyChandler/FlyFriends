/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import useStyles from './profileFriendsAndTripStyle'
import Trips from './Trips/Trips'
import { fetchSetLkFlightsWhereIamUser } from '../../../redux/actionCreators/lkAC'
import FriendList from './FriendList/FriendList'
import { useSearchFriendContext } from '../../../context/searchFriendContext'
import SearchFriend from './SearchFriend/SearchFriend'
import FullWidthTabs from './TripList/TripList'
import Chat from '../../Chat/Chat'

export default function ProfileFriendsAndTrip() {
  const classes = useStyles()

  const {
    userFlyLK,
    friendFlyLK,
    middleFlyLK,
  } = useSelector((state) => state.lkFlightsWhereIamAUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSetLkFlightsWhereIamUser())
  }, [])

  const { flagSearchFriend, boxForChatFlight } = useSearchFriendContext()

  return (

    <Grid container spacing={3}>
      { flagSearchFriend ? <SearchFriend /> : <FriendList />}

      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <FullWidthTabs />
        </Box>
      </Grid>
    </Grid>

  )
}
