import { CLOSE_DELETE_MODAL, OPEN_DELETE_MODAL } from '../types/type'

export const openDeleteModalAC = (type, flight) => ({
  type: OPEN_DELETE_MODAL,
  payload: {
    type,
    flight,
  },
})

export const closeDeleteModalAC = () => ({
  type: CLOSE_DELETE_MODAL,
  payload: {
    flight: {},
    type: '',
    open: false,
  },
})
