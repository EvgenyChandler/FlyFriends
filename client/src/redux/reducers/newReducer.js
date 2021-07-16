import { NEW } from '../types/type'

export default function newReducer(state = 0, action) {
  switch (action.type) {
    case NEW:
      return action.payload
    default:
      return state
  }
}
