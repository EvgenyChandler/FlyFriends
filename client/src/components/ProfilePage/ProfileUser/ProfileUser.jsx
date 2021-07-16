/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline,no-underscore-dangle */
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar, Box, Button, IconButton, Typography,
} from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import useStyles from './profileUserStyle'
import { useSearchFriendContext } from '../../../context/searchFriendContext'
import avatarLogo from '../../../assets/img/default_avatar.jpeg'
import { avatarUploadOnServer, deleteAvatarFromServer } from '../../../redux/actionCreators/userAC'
import Chat from '../../Chat/Chat'

export default function ProfileUser() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [drag, setDrag] = useState(false)
  const currentUser = useSelector((state) => state.users.currentUser)
  const avatar = currentUser.avatar ? `${process.env.REACT_APP_SERVER_URL}${currentUser.avatar}` : avatarLogo

  const GradientAvatarStyle = React.memo(() => {
    const styles = useGradientAvatarStyles({
      size: 80,
      gap: 3,
      thickness: 3,
      gapColor: '#f4f7fa',
      color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
    })
    return (
      <>
        <div className={styles.root}>
          {drag
            ? <Avatar alt={currentUser?.name} />
            : <Avatar src={avatar} alt={currentUser?.name} />}
        </div>
      </>
    )
  })

  const { boxForChatFlight, flagSearchFriend, flagSearchFriendHendler } = useSearchFriendContext()

  const changeHandler = (e) => {
    const file = e.target.files[0]
    const id = currentUser._id
    dispatch(avatarUploadOnServer(file, id))
  }

  const dragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }

  const dropHandler = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const id = currentUser._id
    dispatch(avatarUploadOnServer(file, id))
    setDrag(false)
  }

  return (
    <Grid container spacing={3}>
      <Grid
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => dropHandler(e)}
        item
        xs={12}
      >
        {/* <Paper className={classes.paper}> */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className={classes.userPicBox}>
            <GradientAvatarStyle />
          </div>
          <Box m={2}>
            <Typography>
              {currentUser.name}
            </Typography>
          </Box>
          {currentUser?.city ? (
            <Box>
              <Typography>
                {currentUser?.city}
              </Typography>
            </Box>
          ) : null}

          <Box p={1} display="flex">
            <Box>

              <input
                id="avatar"
                accept="image/*"
                onChange={(e) => changeHandler(e)}
                // label="Загрузить аватарку"
                // name="email"
                type="file"
                hidden="true"
              />
              <label htmlFor="avatar">
                <IconButton color="default" aria-label="upload picture" component="span">
                  <AddPhotoAlternateIcon />
                </IconButton>
              </label>

            </Box>
            <Box>

              <IconButton
                color="secondary"
                onClick={() => dispatch(deleteAvatarFromServer(currentUser._id))}
              >
                <DeleteForeverIcon />
              </IconButton>
            </Box>
          </Box>
          <Box p={1}>
            <Button size="small" onClick={flagSearchFriendHendler}>
              <Typography>

                {flagSearchFriend ? 'Мои друзья' : 'Поиск друзей'}
              </Typography>
            </Button>

          </Box>
        </Box>
        {/* </Paper> */}
      </Grid>
      <Grid item xs={12}>
        {boxForChatFlight?._id ? <Chat /> : null}
      </Grid>
    </Grid>
  )
}
