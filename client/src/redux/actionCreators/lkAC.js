/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { isAuth } from '../../helpers/auth'
import {
  SET_LK_USER_FLY_WHERE_I_AM_USER,
  SET_LK_FRIEND_FLY_WHERE_I_AM_USER,
  SET_LK_MIDDLE_FLY_WHERE_I_AM_USER,
  DELETE_LK_USER_FLY_WHERE_I_AM_USER,
  DELETE_LK_FRIEND_FLY_WHERE_I_AM_USER,
  DELETE_LK_MIDDLE_FLY_WHERE_I_AM_USER,
  ADD_FRIEND_TO_USER_FLIGHT,
  ADD_FRIEND_TO_FRIEND_FLIGHT,
  ADD_FRIEND_TO_MIDDLE_FLIGHT,
  SET_LK_USER_FLY_WHERE_I_AM_FRIEND,
  SET_LK_FRIEND_FLY_WHERE_I_AM_FRIEND,
  SET_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND,
  DELETE_LK_USER_FLY_WHERE_I_AM_FRIEND,
  DELETE_LK_FRIEND_FLY_WHERE_I_AM_FRIEND,
  DELETE_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND,
  NEW,
} from '../types/type'

const setLkUserFlightWhereIamUserAC = (payload) => {
  return {
    type: SET_LK_USER_FLY_WHERE_I_AM_USER,
    payload,
  }
}

const setLkFriendFlightWhereIamUserAC = (payload) => {
  return {
    type: SET_LK_FRIEND_FLY_WHERE_I_AM_USER,
    payload,
  }
}

const setLkMiddleFlightWhereIamUserAC = (payload) => {
  return {
    type: SET_LK_MIDDLE_FLY_WHERE_I_AM_USER,
    payload,
  }
}

const deleteLkUserFlightWhereIamUserAC = (payload) => {
  return {
    type: DELETE_LK_USER_FLY_WHERE_I_AM_USER,
    payload,
  }
}

const deleteLkFriendFlightWhereIamUserAC = (payload) => {
  return {
    type: DELETE_LK_FRIEND_FLY_WHERE_I_AM_USER,
    payload,
  }
}

const deleteLkMiddleFlightWhereIamUserAC = (payload) => {
  return {
    type: DELETE_LK_MIDDLE_FLY_WHERE_I_AM_USER,
    payload,
  }
}

const addFriendToUserFlight = (payload) => {
  return {
    type: ADD_FRIEND_TO_USER_FLIGHT,
    payload,
  }
}

const addFriendToFriendFlight = (payload) => {
  return {
    type: ADD_FRIEND_TO_FRIEND_FLIGHT,
    payload,
  }
}

const addFriendToMiddleFlight = (payload) => {
  return {
    type: ADD_FRIEND_TO_MIDDLE_FLIGHT,
    payload,
  }
}

const setLkUserFlightWhereIamFriendAC = (payload) => {
  return {
    type: SET_LK_USER_FLY_WHERE_I_AM_FRIEND,
    payload,
  }
}

const setLkFriendFlightWhereIamFriendAC = (payload) => {
  return {
    type: SET_LK_FRIEND_FLY_WHERE_I_AM_FRIEND,
    payload,
  }
}

const setLkMiddleFlightWhereIamFriendAC = (payload) => {
  return {
    type: SET_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND,
    payload,
  }
}

const deleteLkUserFlightWhereIamFriendAC = (payload) => {
  return {
    type: DELETE_LK_USER_FLY_WHERE_I_AM_FRIEND,
    payload,
  }
}

const deleteLkFriendFlightWhereIamFriendAC = (payload) => {
  return {
    type: DELETE_LK_FRIEND_FLY_WHERE_I_AM_FRIEND,
    payload,
  }
}

const deleteLkMiddleFlightWhereIamFriendAC = (payload) => {
  return {
    type: DELETE_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND,
    payload,
  }
}

const newAC = (payload) => {
  return {
    type: NEW,
    payload,
  }
}

// Удаление поездок и где ты юзер, и где ты друг
export const fetchDeleteLkFlightsWhereIamUser = (type, flight) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/lk/flights/userFlights`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: flight._id }),
  })
  if (response.status === 200) {
    if (isAuth()._id === flight.user._id) {
      if (type === 'fromUserToFriend') {
        dispatch(deleteLkUserFlightWhereIamUserAC(flight._id))
      } else if (type === 'fromFriendToUser') {
        dispatch(deleteLkFriendFlightWhereIamUserAC(flight._id))
      } else {
        dispatch(deleteLkMiddleFlightWhereIamUserAC(flight._id))
      }
    } else if (isAuth()._id === flight.friend._id) {
      if (type === 'fromUserToFriend') {
        dispatch(deleteLkUserFlightWhereIamFriendAC(flight._id))
      } else if (type === 'fromFriendToUser') {
        dispatch(deleteLkFriendFlightWhereIamFriendAC(flight._id))
      } else {
        dispatch(deleteLkMiddleFlightWhereIamFriendAC(flight._id))
      }
    }
  }
}

// Отображение поездок, где ты юзер
export const fetchSetLkFlightsWhereIamUser = () => async (dispatch, getState) => {
  if (isAuth()) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/lk/flights`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: isAuth()._id }),
    })
    const fl = await response.json()
    const userFlights = []
    const friendFlights = []
    const middleFlights = []
    fl?.allFlights?.forEach((flight) => {
      if (flight.type === 'fromUserToFriend') {
        userFlights.push(flight)
      } else if (flight.type === 'fromFriendToUser') {
        friendFlights.push(flight)
      } else {
        middleFlights.push(flight)
      }
    })
    dispatch(newAC(fl?.counter))
    dispatch(setLkUserFlightWhereIamUserAC(userFlights))
    dispatch(setLkFriendFlightWhereIamUserAC(friendFlights))
    dispatch(setLkMiddleFlightWhereIamUserAC(middleFlights))
  } else {
    dispatch(setLkUserFlightWhereIamUserAC([]))
    dispatch(setLkFriendFlightWhereIamUserAC([]))
    dispatch(setLkMiddleFlightWhereIamUserAC([]))
  }
}

// Добавление друга в поездку
export const fetchAddFriendToFlight = (friendId, flight) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/lk/flights`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ friendId, flight }),
  })
  const currentFlight = await response.json()
  if (currentFlight.type === 'fromUserToFriend') {
    dispatch(addFriendToUserFlight(currentFlight))
  } else if (currentFlight.type === 'fromFriendToUser') {
    dispatch(addFriendToFriendFlight(currentFlight))
  } else {
    dispatch(addFriendToMiddleFlight(currentFlight))
  }
}

// Отображение поездок, где ты друг
export const fetchSetLkFlightsWhereIamFriend = () => async (dispatch, getState) => {
  if (isAuth()) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/lk/flights/friendsFlights`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: isAuth()._id }),
    })
    const allFLights = await response.json()
    const userFlights = []
    const friendFlights = []
    const middleFlights = []
    allFLights
      .forEach((flight) => {
        if (flight.type === 'fromUserToFriend') {
          userFlights.push(flight)
        } else if (flight.type === 'fromFriendToUser') {
          friendFlights.push(flight)
        } else {
          middleFlights.push(flight)
        }
      })
    dispatch(setLkUserFlightWhereIamFriendAC(userFlights))
    dispatch(setLkFriendFlightWhereIamFriendAC(friendFlights))
    dispatch(setLkMiddleFlightWhereIamFriendAC(middleFlights))
  } else {
    dispatch(setLkUserFlightWhereIamFriendAC([]))
    dispatch(setLkFriendFlightWhereIamFriendAC([]))
    dispatch(setLkMiddleFlightWhereIamFriendAC([]))
  }
}

export const fetchDeleteNewFromFriendsFlights = () => async (dispatch, getState) => {
  if (isAuth()) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/lk/flights/updNewStatus`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: isAuth()._id }),
    })
    dispatch(newAC(0))
  }
}
