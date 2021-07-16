import { CLOSE_DELETE_MODAL, OPEN_DELETE_MODAL } from '../types/type'

const deleteModalReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_DELETE_MODAL:
      return {
        flight: action.payload.flight,
        type: action.payload.type,
        open: true,
      }
    case CLOSE_DELETE_MODAL:
      return action.payload
    default:
      return state
  }
}

export default deleteModalReducer
