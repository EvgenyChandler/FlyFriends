/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { isAuth } from '../../helpers/auth'
import { DELETE_FRIEND_LK, FRIENDS } from '../types/type'

export const getLkFriendsAC = (payload) => {
  return {
    type: FRIENDS,
    payload,
  }
}

const deleteLkFriend = (payload) => {
  return {
    type: DELETE_FRIEND_LK,
    payload,
  }
}

// Отображение друзей в ЛК
export const fetchGetLkFriendAC = () => async (dispatch, getState) => {
  if (isAuth()) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/search/friends/getFriends`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: isAuth()._id }),
    })
    const friends = await response.json()
    dispatch(getLkFriendsAC(friends))
  } else {
    dispatch(getLkFriendsAC([]))
  }
}

// Удаление друга (не из раздела с поиском)
export const fetchDeleteLkFriend = (id) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/search/friends`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ friendId: id, userId: isAuth()._id }),
  })
  dispatch(deleteLkFriend(id))
}
