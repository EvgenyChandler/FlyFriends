/* eslint-disable no-underscore-dangle */
import { DELETE_FRIEND_LK, FRIENDS } from '../types/type'

export default function lkFriendsReducer(state = [], action) {
  switch (action.type) {
    case FRIENDS:
      return action.payload
    case DELETE_FRIEND_LK:
      return state.filter((el) => el._id !== action.payload)
    default:
      return state
  }
}
