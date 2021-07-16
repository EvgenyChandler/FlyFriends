import {
  BUTTON_PROCESS_ACTIVATION,
  BUTTON_PROCESS_FORGOT,
  BUTTON_PROCESS_LOGIN,
  BUTTON_PROCESS_REGISTRATION,
  LOGOUT_USER,
  SET_USER, SUCCESS_FOR_HISTORY,
} from '../types/type'

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthState: true,
      }
    case BUTTON_PROCESS_REGISTRATION:
      return {
        ...state,
        textOnRegButton: action.payload,
      }
    case BUTTON_PROCESS_FORGOT:
      return {
        ...state,
        textOnForgotButton: action.payload,
      }
    case BUTTON_PROCESS_ACTIVATION:
      return {
        ...state,
        textForButtonActivation: action.payload,
      }
    case BUTTON_PROCESS_LOGIN:
      return {
        ...state,
        textOnLoginButton: action.payload,
      }
    case LOGOUT_USER:
      return {
        isAuthState: false,
        currentUser: {},
        textOnRegButton: 'Зарегистрироваться',
        textOnLoginButton: 'Войти',
      }
    case SUCCESS_FOR_HISTORY:
      return {
        ...state,
        successForHistory: true,
      }
    default:
      return state
  }
}
