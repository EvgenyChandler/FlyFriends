/* eslint-disable no-underscore-dangle */
import { put, call, debounce } from 'redux-saga/effects'
import { searchFriendsAC } from '../actionCreators/searchFriendsAC'
import { SEARCH_FRIENDS_SAGA } from '../types/type'
import { isAuth } from '../../helpers/auth'

function fetchSearchFriens(text) {
  return fetch(`${process.env.REACT_APP_API_URL}/search/friends`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, id: isAuth()._id }),
  }).then((res) => res.json())
}
function* searchFriendsWorker({ payload }) {
  try {
    const friends = yield call(fetchSearchFriens, payload)
    yield put(searchFriendsAC(friends))
  } catch (e) {
    console.log(e)
  }
}

function* searchFriendsWatcher() {
  yield debounce(300, SEARCH_FRIENDS_SAGA, searchFriendsWorker)
}

export default searchFriendsWatcher
