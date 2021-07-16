const initState = {
  users: {
    currentUser: {},
    textOnRegButton: 'Зарегистрироваться',
    textOnLoginButton: 'Войти',
    textOnForgotButton: 'Восстановить пароль',
    textForButtonActivation: 'Нажмите для активации аккаунта',
    isAuthState: false,
    successForHistory: false,
  },
  flights: {
    userFly: [],
    friendFly: [],
    middleFly: {},
    loader: false,
  },
  card: [],
  lkFlightsWhereIamAUser: {
    userFlyLK: [],
    friendFlyLK: [],
    middleFlyLK: [],
  },
  lkFlightsWhereIamAFriend: {
    userFlyLK: [],
    friendFlyLK: [],
    middleFlyLK: [],
  },
  deleteModal: {
    flight: {},
    type: '',
    open: false,
  },
  lkSearchFriend: [],
  lkFriends: [],
  new: 0,
}

export default initState
