/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  Avatar, Box, Typography, Button, IconButton, Link,
} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import React from 'react'
import { useDispatch } from 'react-redux'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph'
import useStyles from './tripsStyle'
import { openDeleteModalAC } from '../../../../redux/actionCreators/deleteModalAC'
import { useSearchFriendContext } from '../../../../context/searchFriendContext'

export default function Trips({ flight }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    chatBoxHandler,
  } = useSearchFriendContext()

  const openDeleteModalHandler = (type, id) => {
    dispatch(openDeleteModalAC(type, id))
  }

  const [bgColor, setBgColor] = React.useState('#E3F0F2')
  const classes2 = useNeumorphShadowStyles({ bgColor })

  if (!flight.type) {
    return (
      <Box className={classes.tripBox} display="flex" flexDirection="column" justifyContent="center" alignItems="center" m={3}>
        <AvatarGroup max={4}>
          <Avatar
            className={classes.userPic}
            alt={flight?.friend?.name}
            src={flight.friend?.avatar
              ? `${process.env.REACT_APP_SERVER_URL}${flight.friend?.avatar}`
              : ' '}
          />
          {flight.friend
            ? (
              <Avatar
                className={classes.userPic}
                alt={flight.user?.name}
                src={flight.user?.avatar
                  ? `${process.env.REACT_APP_SERVER_URL}${flight.user?.avatar}`
                  : ' '}
              />
            ) : ' '}
        </AvatarGroup>
        <Box
          m={1}
          className={classes.textBox}
          classes={classes2}
          borderRadius={2}
          minHeight={300}
          width={400}
          textAlign="center"
          borderRadius={16}
          borderColor={flight.new ? '#DB5461' : null}
          border={flight.new ? 2 : 0}
        >
          <Box m={3}>
            <Typography>{flight.date.split('-').reverse().join('-')}</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            m={1}
          >
            <Box width={150}>
              <Typography variant="h5">
                {flight.friendCityFrom}
              </Typography>
            </Box>
            <FlightTakeoffIcon />
            <Box width={150} className={classes.cityBox}>
              <Typography variant="h5">
                {flight.userCityFrom}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" m={1}>
            <Typography variant="h6" className={classes.priceBox}>
              {flight.friendPrice}
            </Typography>
            ₽
            <Typography variant="h6" className={classes.priceBox}>
              {flight.userPrice}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" m={1}>
            <Box>
              <Typography variant="body2">
                <Link className={classes.linkToButton} href={`https://www.aviasales.ru/search?origin_iata=${flight.friendCityCodeFrom}&destination_iata=${flight.friendCityCodeTo}&depart_date=${flight.date}&adults=1&children=0&infants=0&with_request=true`}>
                  Купить
                </Link>
              </Typography>
            </Box>
            <Box><FlightLandIcon /></Box>
            <Box>
              <Typography variant="body2">
                <Link className={classes.linkToButton} href={`https://www.aviasales.ru/search?origin_iata=${flight.userCityCodeFrom}&destination_iata=${flight.userCityCodeTo}&depart_date=${flight.date}&adults=1&children=0&infants=0&with_request=true`}>
                  Купить
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6">{flight.userCityTo}</Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" m={1}>
            <Box width={100} textAlign="center">
              <IconButton onClick={() => openDeleteModalHandler(flight.type, flight)}>
                <RestoreFromTrashIcon />
              </IconButton>
            </Box>
            <Box width={100}>
              <IconButton onClick={() => chatBoxHandler(flight)}>
                <MessageOutlinedIcon />
              </IconButton>

            </Box>

          </Box>
        </Box>
      </Box>
    )
  } if (flight.type === 'fromUserToFriend') {
    return (
      <Box className={classes.tripBox} display="flex" flexDirection="column" justifyContent="center" alignItems="center" m={3}>
        <AvatarGroup max={4}>
          <Avatar
            className={classes.userPic}
            alt={flight.friend.name}
            src={flight.friend?.avatar
              ? `${process.env.REACT_APP_SERVER_URL}${flight.friend?.avatar}`
              : ' '}
          />
          {flight.friend
            ? (
              <Avatar
                className={classes.userPic}
                alt={flight.user?.name}
                src={flight.user?.avatar
                  ? `${process.env.REACT_APP_SERVER_URL}${flight.user?.avatar}`
                  : ' '}
              />
            ) : null}
        </AvatarGroup>
        <Box
          m={1}
          className={classes.textBox}
          classes={classes2}
          borderRadius={2}
          minHeight={300}
          width={400}
          textAlign="center"
          borderRadius={16}
          borderColor={flight.new ? '#DB5461' : null}
          border={flight.new ? 2 : 0}
        >
          <Box m={2}>
            <Typography>{flight.date.split('-').reverse().join('-')}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
            <Box width={150}>
              <Typography variant="h5">
                {flight.userCityFrom}
              </Typography>
            </Box>
            <Box width={150}>
              <FlightTakeoffIcon />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" m={1}>

            <Typography variant="h6">
              {flight.price}
              {' '}
              ₽
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
            <Box width={150}>
              <Typography variant="h5">
                {flight.userCityTo}
              </Typography>
            </Box>
            <Box width={150}>
              <FlightLandIcon />
            </Box>
          </Box>
          <Box m={1} pt={1}>
            <Typography variant="body2">
              <Link className={classes.linkToButton} href={`https://www.aviasales.ru/search?origin_iata=${flight.userCityCodeFrom}&destination_iata=${flight.userCityCodeTo}&depart_date=${flight.date}&adults=1&children=0&infants=0&with_request=true`}>
                Купить
              </Link>
            </Typography>

          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" mt={2} borderRadius={16} className={classes.toFriendBox}>
            <Typography variant="h7">
              Друг прилетит к тебе. На двоих по
              {' '}
              {flight.price / 2}
              {' '}
              ₽
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" m={1}>
            <Box width={100} textAlign="center">
              <IconButton onClick={() => openDeleteModalHandler(flight.type, flight)}>
                <RestoreFromTrashIcon />
              </IconButton>
            </Box>
            <Box width={100}>
              <IconButton onClick={() => chatBoxHandler(flight)}>
                <MessageOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  } if (flight.type === 'fromFriendToUser') {
    return (
      <Box className={classes.tripBox} display="flex" flexDirection="column" justifyContent="center" alignItems="center" m={3}>
        <AvatarGroup max={4}>
          <Avatar
            className={classes.userPic}
            alt={flight.friend.name}
            src={flight.friend?.avatar
              ? `${process.env.REACT_APP_SERVER_URL}${flight.friend?.avatar}`
              : ' '}
          />
          {flight.friend
            ? (
              <Avatar
                className={classes.userPic}
                alt={flight.user?.name}
                src={flight.user?.avatar
                  ? `${process.env.REACT_APP_SERVER_URL}${flight.user?.avatar}`
                  : ' '}
              />
            ) : null}
        </AvatarGroup>
        <Box
          m={1}
          className={classes.textBox}
          classes={classes2}
          borderRadius={2}
          minHeight={300}
          width={400}
          textAlign="center"
          borderRadius={16}
          borderColor={flight.new ? '#DB5461' : null}
          border={flight.new ? 2 : 0}
        >
          <Box m={2}>
            <Typography>{flight.date.split('-').reverse().join('-')}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
            <Box width={150}>
              <Typography variant="h5">
                {flight.friendCityFrom}
              </Typography>
            </Box>
            <Box width={150}>
              <FlightTakeoffIcon />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" m={1}>

            <Typography variant="h6">
              {flight.price}
              {' '}
              ₽
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
            <Box width={150}>
              <Typography variant="h5">
                {flight.friendCityTo}
              </Typography>
            </Box>
            <Box width={150}>
              <FlightLandIcon />
            </Box>
          </Box>
          <Box m={1} pt={1}>
            <Typography variant="body2">
              <Link className={classes.linkToButton} href={`https://www.aviasales.ru/search?origin_iata=${flight.friendCityCodeFrom}&destination_iata=${flight.friendCityCodeTo}&depart_date=${flight.date}&adults=1&children=0&infants=0&with_request=true`}>
                Купить
              </Link>
            </Typography>

          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" mt={2} borderRadius={16} className={classes.toFriendBox}>
            <Typography variant="h7">
              Лети к другу. На двоих по
              {' '}
              {flight.price / 2}
              {' '}
              ₽
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" m={1}>
            <Box width={100} textAlign="center">
              <IconButton onClick={() => openDeleteModalHandler(flight.type, flight)}>
                <RestoreFromTrashIcon />
              </IconButton>
            </Box>
            <Box width={100}>
              <IconButton onClick={() => chatBoxHandler(flight)}>
                <MessageOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}
