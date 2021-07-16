import { SET_MAP } from '../types/type'

export default function mapReducer(state = [], action) {
  switch (action.type) {
    case SET_MAP:
      return action.payload
    default:
      return state
  }
}
