/* eslint-disable no-underscore-dangle */
import { ADD_FRIEND, DELETE_FRIEND_SEARCH, SEARCH_FRIENDS } from '../types/type'

export default function lkSearchFriendReducer(state = [], action) {
  switch (action.type) {
    case SEARCH_FRIENDS:
      return action.payload
    case ADD_FRIEND:
      return state.map((user) => {
        if (user._id === action.payload) {
          return { ...user, status: true }
        }
        return user
      })
    case DELETE_FRIEND_SEARCH:
      return state.map((user) => {
        if (user._id === action.payload) {
          return { ...user, status: false }
        }
        return user
      })
    default:
      return state
  }
}
