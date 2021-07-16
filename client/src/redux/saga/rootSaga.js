import { all } from 'redux-saga/effects'
import searchFriendsWatcher from './searchFriendsSaga'

export default function* rootSaga() {
  yield all([searchFriendsWatcher()])
}
