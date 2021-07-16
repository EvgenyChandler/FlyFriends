/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button, ButtonGroup, CardHeader, Paper, Typography,
} from '@material-ui/core'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { BiGhost } from 'react-icons/bi'
import { isAuth } from '../../helpers/auth'
import { useSearchFriendContext } from '../../context/searchFriendContext'
import useStyles from './chatStyle'
import CssTextField from '../../hooks/myMaterialComps'
import LoaderAirplane from '../LoaderAirplane/LoaderAirplane'

const Chat = () => {
  const classes = useStyles()
  const { firestore, boxForChatFlight, chatBoxHandler } = useSearchFriendContext()
  const [value, setValue] = useState('')

  const userAvatar = boxForChatFlight?.user?.avatar ? `${process.env.REACT_APP_SERVER_URL}${boxForChatFlight?.user?.avatar}` : ' '

  const friendAvatar = boxForChatFlight?.friend?.avatar ? `${process.env.REACT_APP_SERVER_URL}${boxForChatFlight?.friend?.avatar}` : ' '

  const [messages, loading] = useCollectionData(
    firestore.collection(boxForChatFlight?._id ? boxForChatFlight?._id : 'messages').orderBy('createdAt'),
  )

  if (loading) {
    return (
      <div className={classes.root}>
        <LoaderAirplane />
      </div>
    )
  }

  const refs = messages?.reduce((acc, val) => {
    acc[val.uid] = React.createRef()
    return acc
  }, {})

  const sendMessage = async (uid) => {
    if (!value) return
    firestore.collection(boxForChatFlight?._id ? boxForChatFlight?._id : 'messages').add({
      uid: isAuth()._id,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValue('')
    await refs[uid]?.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const OfficialCardHeader = () => (
    <CardHeader
      avatar={(
        <Avatar
          aria-label="recipe"
          src={isAuth()?._id === boxForChatFlight?.friend._id
            ? userAvatar : friendAvatar}
          alt={boxForChatFlight?.friend.name}
        />
      )}
      title={isAuth()?._id === boxForChatFlight?.friend._id
        ? boxForChatFlight?.user.name
        : boxForChatFlight?.friend.name}
      subheader={<BiGhost />}
    />
  )

  return (
    <>
      <OfficialCardHeader />
      <Paper elevation={5} className={classes.paper}>
        <Box
          component="div"
          justifyContent="center"
          style={{ height: '100%', marginTop: '2px', wordBreak: 'break-word' }}
          className="message-placeholder"
        >
          <div
            style={{
              width: '100%',
              height: '50vh',
              wordWrap: 'break-word',
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {messages.map((message) => (
              <Box
                key={message.text}
                style={{
                  wordWrap: 'break-word',
                }}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                flexWrap="nowrap"
                alignItems={isAuth()._id === message.uid ? 'flex-end' : 'flex-start'}
              >
                <div
                  style={{
                    borderRadius: `${isAuth()._id === message.uid ? '20px 20px 0px 20px' : '20px 20px 20px 0px'}`,
                    background: `${isAuth()._id === message.uid ? '#3D405B' : '#1430A4'}`,
                    color: '#FFFFFF',
                    width: 'auto',
                    margin: '5px 1px 5px 1px',
                    padding: '5px 5px 5px 5px',
                    wordWrap: 'break-word',
                  }}
                >
                  <Typography
                    ref={refs[message.uid]}
                    variant="body1"
                  >
                    {message.text}
                  </Typography>
                </div>
              </Box>
            ))}
            <br />
            <br />
          </div>
          <Box>
            <CssTextField
              value={value}
              variant="outlined"
              fullWidth
              rowsMax={2}
              onChange={(e) => setValue(e.target.value)}
              id="outlined-multiline-static"
              label="Сообщение..."
              margin="dense"
              style={{ backgroundColor: 'rgba(198, 160, 234, .3)' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage(messages.length ? messages[messages.length - 1].uid : null)
                }
              }}
            />
          </Box>
          <Box display="flex">
            <ButtonGroup fullWidth="true">
              <Button onClick={() => { chatBoxHandler({}) }}>Закрыть</Button>
              <Button
                onClick={() => sendMessage(messages.length ? messages[messages.length - 1].uid : null)}
                variant="outlined"
              >
                Отправить
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default Chat
