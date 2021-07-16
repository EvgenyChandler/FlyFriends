/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import {
  Box, Avatar, Typography, Badge,
} from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { withStyles } from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { scroller } from 'react-scroll'
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient'
import { fetchDeleteLkFriend } from '../../../../redux/actionCreators/lkFriendsAC'
import useStyles from './friendAvatarStyle'
import { useSearchFriendContext } from '../../../../context/searchFriendContext'
import { fetchAddFriendToFlight } from '../../../../redux/actionCreators/lkAC'

const SmallAvatar = withStyles(() => ({
  root: {
    width: 40,
    height: 40,
    border: '2px',
    backgroundColor: 'transparent',
    color: 'red',
  },
}))(Avatar)

export default function FriendAvatar({ friend }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    deleteAndAddStatus,
    changeDeleteAndAddStatus,
    boxForFlight,
  } = useSearchFriendContext()

  const scrollToTripsHandler = () => {
    scroller.scrollTo('trips', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  const deleteFriendLkHandler = () => {
    if (deleteAndAddStatus) {
      dispatch(fetchAddFriendToFlight(friend._id, boxForFlight))
      changeDeleteAndAddStatus(false)
      scrollToTripsHandler()
    } else {
      dispatch(fetchDeleteLkFriend(friend._id))
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
            <button onClick={deleteFriendLkHandler} type="button" className={classes.buttonDeleteFriend}>
              <SmallAvatar>
                {deleteAndAddStatus
                  ? <CheckCircleIcon className={classes.doneAddFriendIcon} />
                  : <HighlightOffIcon className={classes.deleteFriendIcon} />}

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
