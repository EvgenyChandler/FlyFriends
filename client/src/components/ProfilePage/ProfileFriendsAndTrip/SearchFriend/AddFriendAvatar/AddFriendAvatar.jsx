/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { useDispatch } from 'react-redux'
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient'
import { FcOk } from 'react-icons/fc'
import { RiAddCircleFill } from 'react-icons/ri'

import useStyles from './addFriendAvatarStyle'
import { fetchAddFriend, fetchDeleteFriendSearch } from '../../../../../redux/actionCreators/searchFriendsAC'

const SmallAvatar = withStyles(() => ({
  root: {
    width: 40,
    height: 40,
    border: '2px',
    backgroundColor: 'transparent',
  },
}))(Avatar)

export default function AddFriendAvatar({ friend }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const addFriendHandler = () => {
    if (!friend.status) {
      dispatch(fetchAddFriend(friend._id))
    } else {
      dispatch(fetchDeleteFriendSearch(friend._id))
    }
  }

  const GradientAvatarStyle = React.memo(() => {
    const styles = useGradientAvatarStyles({
      size: 55,
      gap: 3,
      thickness: 3,
      gapColor: '#f4f7fa',
      color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
    })
    return (
      <>
        <div className={styles.root}>
          <Avatar alt={friend?.name} src={`${process.env.REACT_APP_SERVER_URL}${friend?.avatar}`} />
        </div>
      </>
    )
  })

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m={3}
    >
      <div className={classes.root}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={(
            <button onClick={addFriendHandler} type="button" className={classes.buttonAddFriend}>
              <SmallAvatar>
                {friend?.status
                  ? <FcOk className={classes.doneAddFriendIcon} />
                  : <RiAddCircleFill className={classes.addFriendIcon} />}
              </SmallAvatar>
            </button>
          )}
        >
          <GradientAvatarStyle />
        </Badge>
      </div>
      <Box m={0}>
        <Typography>{friend?.name}</Typography>
      </Box>
    </Box>
  )
}
