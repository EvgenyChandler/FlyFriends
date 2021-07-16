/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { isAuth } from '../../helpers/auth'
import {
  ADD_FRIEND, DELETE_FRIEND_SEARCH, SEARCH_FRIENDS, SEARCH_FRIENDS_SAGA,
} from '../types/type'

export const sagaSearchFriendsAC = (payload) => {
  return {
    type: SEARCH_FRIENDS_SAGA,
    payload,
  }
}

export const searchFriendsAC = (payload) => {
  return {
    type: SEARCH_FRIENDS,
    payload,
  }
}

export const addFriendAC = (payload) => {
  return {
    type: ADD_FRIEND,
    payload,
  }
}

export const deleteFriendSearchAC = (payload) => {
  return {
    type: DELETE_FRIEND_SEARCH,
    payload,
  }
}

// Добавление друга из раздела с поиском
export const fetchAddFriend = (id) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/search/friends/addFriend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ friendId: id, userId: isAuth()._id }),
  })
  dispatch(addFriendAC(id))
}

// Удаление друга из раздела с поиском
export const fetchDeleteFriendSearch = (id) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/search/friends`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ friendId: id, userId: isAuth()._id }),
  })
  dispatch(deleteFriendSearchAC(id))
}
