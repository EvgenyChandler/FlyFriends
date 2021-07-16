/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Box, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import SportsKabaddiOutlinedIcon from '@material-ui/icons/SportsKabaddiOutlined'
import useStyles from './friendListStyle'
import FriendAvatar from '../FriendAvatar/FriendAvatar'
import { fetchGetLkFriendAC } from '../../../../redux/actionCreators/lkFriendsAC'

export default function FriendList() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const lkFriends = useSelector((state) => state.lkFriends)
  const isAuthState = useSelector((state) => state.users.isAuthState)

  useEffect(() => {
    dispatch(fetchGetLkFriendAC())
  }, [])

  return (
    <Grid name="friends" item xs={12}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box>

          <Typography variant="h5" align="center">ДРУЗЬЯ</Typography>

        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          className={classes.boxSearchFriend}
        >
          {lkFriends?.length ? lkFriends?.map((friend) => <FriendAvatar friend={friend} />) : null}
        </Box>
      </Box>
    </Grid>

  )
}
