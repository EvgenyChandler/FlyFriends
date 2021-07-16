import {
  LOADER_FALSE,
  LOADER_TRUE,
  SAVE_MIDDLE_FLIGTHS,
  SAVE_USER_FLIGTHS,
  SET_FRIEND_FLIGTHS,
  SET_MIDDLE_FLIGTHS,
  SET_USER_FLIGTHS,
  VISIBLE_MIDDLE_FLIGHTS,
  VISIBLE_USER_FLIGHTS,
} from '../types/type'

export default function flightsReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER_FLIGTHS:
      return {
        ...state,
        userFly: action.payload,
      }
    case SET_FRIEND_FLIGTHS:
      return {
        ...state,
        friendFly: action.payload,
      }
    case SET_MIDDLE_FLIGTHS:
      return {
        ...state,
        middleFly: action.payload,
      }
    case SAVE_MIDDLE_FLIGTHS:
      return {
        ...state,
        middleFly: {
          ...state.middleFly,
          status: true,
        },
      }
    case VISIBLE_MIDDLE_FLIGHTS:
      return {
        ...state,
        middleFly: {
          ...state.middleFly,
          visible: true,
        },
      }
    case SAVE_USER_FLIGTHS:
      return {
        ...state,
        userFly: state.userFly.map((el) => {
          if (el.name === action.payload) {
            return { ...el, status: true }
          }
          return el
        }),
      }
    case VISIBLE_USER_FLIGHTS:
      return {
        ...state,
        userFly: state.userFly.map((el) => {
          if (el.name === action.payload) {
            return { ...el, visible: true }
          }
          return el
        }),
      }
    case LOADER_TRUE:
      return {
        ...state,
        loader: true,
      }
    case LOADER_FALSE:
      return { ...state, loader: false }
    default:
      return state
  }
}
