/* eslint-disable no-underscore-dangle */
import {
  SET_LK_USER_FLY_WHERE_I_AM_USER,
  SET_LK_FRIEND_FLY_WHERE_I_AM_USER,
  SET_LK_MIDDLE_FLY_WHERE_I_AM_USER,
  DELETE_LK_FRIEND_FLY_WHERE_I_AM_USER,
  DELETE_LK_MIDDLE_FLY_WHERE_I_AM_USER,
  DELETE_LK_USER_FLY_WHERE_I_AM_USER,
  ADD_FRIEND_TO_USER_FLIGHT,
  ADD_FRIEND_TO_FRIEND_FLIGHT,
  ADD_FRIEND_TO_MIDDLE_FLIGHT,
} from '../types/type'

export default function lkFlightsWhereIamUserReducer(state = {}, action) {
  switch (action.type) {
    case SET_LK_USER_FLY_WHERE_I_AM_USER:
      return {
        ...state,
        userFlyLK: action.payload,
      }
    case SET_LK_FRIEND_FLY_WHERE_I_AM_USER:
      return {
        ...state,
        friendFlyLK: action.payload,
      }
    case SET_LK_MIDDLE_FLY_WHERE_I_AM_USER:
      return {
        ...state,
        middleFlyLK: action.payload,
      }
    case DELETE_LK_USER_FLY_WHERE_I_AM_USER:
      return {
        ...state,
        userFlyLK: state.userFlyLK.filter((fly) => fly._id !== action.payload),
      }
    case DELETE_LK_FRIEND_FLY_WHERE_I_AM_USER:
      return {
        ...state,
        friendFlyLK: state.friendFlyLK.filter((fly) => fly._id !== action.payload),
      }
    case DELETE_LK_MIDDLE_FLY_WHERE_I_AM_USER:
      return {
        ...state,
        middleFlyLK: state.middleFlyLK.filter((fly) => fly._id !== action.payload),
      }
    case ADD_FRIEND_TO_USER_FLIGHT:
      return {
        ...state,
        userFlyLK: state.userFlyLK.map((fly) => {
          if (fly._id === action.payload._id) {
            return action.payload
          }
          return fly
        }),
      }
    case ADD_FRIEND_TO_FRIEND_FLIGHT:
      return {
        ...state,
        friendFlyLK: state.friendFlyLK.map((fly) => {
          if (fly._id === action.payload._id) {
            return action.payload
          }
          return fly
        }),
      }
    case ADD_FRIEND_TO_MIDDLE_FLIGHT:
      return {
        ...state,
        middleFlyLK: state.middleFlyLK.map((fly) => {
          if (fly._id === action.payload._id) {
            return action.payload
          }
          return fly
        }),
      }
    default:
      return state
  }
}
