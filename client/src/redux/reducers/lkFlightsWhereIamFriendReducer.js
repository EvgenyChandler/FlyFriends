/* eslint-disable no-underscore-dangle */
import {
  DELETE_LK_FRIEND_FLY_WHERE_I_AM_FRIEND,
  DELETE_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND,
  DELETE_LK_USER_FLY_WHERE_I_AM_FRIEND,
  SET_LK_FRIEND_FLY_WHERE_I_AM_FRIEND,
  SET_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND,
  SET_LK_USER_FLY_WHERE_I_AM_FRIEND,
} from '../types/type'

export default function lkFlightsWhereIamFriendReducer(state = {}, action) {
  switch (action.type) {
    case SET_LK_USER_FLY_WHERE_I_AM_FRIEND:
      return {
        ...state,
        userFlyLK: action.payload,
      }
    case SET_LK_FRIEND_FLY_WHERE_I_AM_FRIEND:
      return {
        ...state,
        friendFlyLK: action.payload,
      }
    case SET_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND:
      return {
        ...state,
        middleFlyLK: action.payload,
      }
    case DELETE_LK_USER_FLY_WHERE_I_AM_FRIEND:
      return {
        ...state,
        userFlyLK: state.userFlyLK.filter((fly) => fly._id !== action.payload),
      }
    case DELETE_LK_FRIEND_FLY_WHERE_I_AM_FRIEND:
      return {
        ...state,
        friendFlyLK: state.friendFlyLK.filter((fly) => fly._id !== action.payload),
      }
    case DELETE_LK_MIDDLE_FLY_WHERE_I_AM_FRIEND:
      return {
        ...state,
        middleFlyLK: state.middleFlyLK.filter((fly) => fly._id !== action.payload),
      }
    default:
      return state
  }
}
