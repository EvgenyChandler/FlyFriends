import { combineReducers } from 'redux'
import mapReducer from './mapReducer'
import flightsReducer from './flightsReducer'
import lkFlightsWhereIamUserReducer from './lkFlightsWhereIamUserReducer'
import deleteModalReducer from './deleteModalReducer'
import usersReducer from './usersReducer'
import lkSearchFriendReducer from './lkSearchFriendReducer'
import lkFriendsReducer from './lkFriendsReducer'
import lkFlightsWhereIamFriendReducer from './lkFlightsWhereIamFriendReducer'
import newReducer from './newReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  flights: flightsReducer,
  card: mapReducer,
  lkFlightsWhereIamAUser: lkFlightsWhereIamUserReducer,
  deleteModal: deleteModalReducer,
  lkSearchFriend: lkSearchFriendReducer,
  lkFriends: lkFriendsReducer,
  lkFlightsWhereIamAFriend: lkFlightsWhereIamFriendReducer,
  new: newReducer,
})

export default rootReducer
