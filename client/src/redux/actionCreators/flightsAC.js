/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { isAuth } from '../../helpers/auth'

import {
  SET_MIDDLE_FLIGTHS,
  SET_USER_FLIGTHS,
  SET_FRIEND_FLIGTHS,
  SET_MAP,
  SAVE_MIDDLE_FLIGTHS,
  VISIBLE_MIDDLE_FLIGHTS,
  SAVE_USER_FLIGTHS,
  VISIBLE_USER_FLIGHTS,
} from '../types/type'
import { actionLoaderFalse, actionLoaderTrue } from './loader'

const userFlightsAC = (payload) => {
  return {
    type: SET_USER_FLIGTHS,
    payload,
  }
}

const saveUserFlightAC = (payload) => {
  return {
    type: SAVE_USER_FLIGTHS,
    payload,
  }
}

const visibleUserFlightAC = (payload) => {
  return {
    type: VISIBLE_USER_FLIGHTS,
    payload,
  }
}

const friendFlightsAC = (payload) => {
  return {
    type: SET_FRIEND_FLIGTHS,
    payload,
  }
}

const middleFlightsAC = (payload) => {
  return {
    type: SET_MIDDLE_FLIGTHS,
    payload,
  }
}

const saveMiddleFlightAC = () => {
  return {
    type: SAVE_MIDDLE_FLIGTHS,
  }
}

const visibleMiddleFlightAC = () => {
  return {
    type: VISIBLE_MIDDLE_FLIGHTS,
  }
}

const setMapAC = (payload) => {
  return {
    type: SET_MAP,
    payload,
  }
}

// Сохранение поездки, где юзер едет к другу или наоборот
export const fetchAddMiddleFlight = (flight) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/search/city/addMiddle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...flight, id: isAuth()._id }),
  })
  dispatch(saveMiddleFlightAC())
  setTimeout(() => {
    dispatch(visibleMiddleFlightAC())
  }, 3300)
}

// Сохранение поездки со средним городом
export const fetchAddTwoFlights = (userFlight, friendFlight) => async (dispatch, getstate) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/search/city/AddTwoCities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userFlight, friendFlight, id: isAuth()._id }),
  })
  dispatch(saveUserFlightAC(userFlight.name))
  setTimeout(() => {
    dispatch(visibleUserFlightAC(userFlight.name))
  }, 3300)
}

// Алгоритм поиска поездок
export const fetchSetFlights = (
  inputUserCity, inputFriendCity, inputDate,
) => async (dispatch, getState) => {
  if (!inputUserCity || !inputFriendCity || !inputDate) {
    return
  }
  dispatch(middleFlightsAC({}))
  dispatch(userFlightsAC([]))
  dispatch(friendFlightsAC([]))
  dispatch(setMapAC([]))

  dispatch(actionLoaderTrue())
  // Определяем IATA коды (перенесем на запрос из бд)
  const responseForGetIATAcodes = await fetch(`${process.env.REACT_APP_TRAVELPAYOUTS}?q=Из%20${inputUserCity}%20в%20${inputFriendCity}`)
  let IATAcodes = await responseForGetIATAcodes.json()

  if (!IATAcodes.origin && !IATAcodes.destination) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search/city/iata`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: inputUserCity,
          destination: inputFriendCity,
        }),
      },
    )
    if (response.status === 401) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        title: 'К сожалению, нечего предложить. Попробуйте другую дату или город.',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC([]))
      return
    }
    IATAcodes = await response.json()
    if (!IATAcodes.origin || !IATAcodes.destination) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        title: 'К сожалению, нечего предложить. Попробуйте другую дату или город.',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC([]))
      return
    }
  }

  // Вытаскиваем все города с бд
  const resCityFromServer = await fetch(`${process.env.REACT_APP_API_URL}/search/city`)
  const citiesFromDB = await resCityFromServer.json()

  // Ищем цену из города юзера в город друга, и наоборот
  const resCities = await fetch(`${process.env.REACT_APP_API_URL}/search/city`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: IATAcodes.origin.iata,
      friend: IATAcodes.destination.iata,
      date: inputDate,
    }),
  })
  if (resCities.status === 500) {
    dispatch(actionLoaderFalse())
    dispatch(middleFlightsAC({
      title: 'К сожалению, нечего предложить. Попробуйте другую дату или город.',
    }))
    dispatch(userFlightsAC([]))
    dispatch(friendFlightsAC([]))
    dispatch(setMapAC([]))
    return
  }

  const userToUser = await resCities.json()

  // создаем массив для меток на карте
  const mapMarkers = citiesFromDB
    .filter((el) => el.name === userToUser.fromFriendToUser.origin_name
    || el.name === userToUser.fromUserToFriend.origin_name)

  // Поиск возможен минимум на месяц, нужно отправлять первый день месяца в качестве
  // даты, поэтому преобразуем дату
  const date = `${inputDate.slice(0, 8)}01`
  // Получаем все возможные вылеты за месяц, поэтому фильтруем по нужному нам дню
  // Потом проверяем на наличие отправлений или на невозможность найти информацию по городу.
  // Делаем это в основном из-за нестабильности API
  const responseForUserCities = await fetch(`${process.env.REACT_APP_MAP_AVIASALES}?origin_iata=${IATAcodes.origin.iata}&period=${date}:month&direct=false&one_way=true&no_visa=true&schengen=false&need_visa=false&locale=ru`)
  const userPossibleCities = await responseForUserCities.json()
  if (userPossibleCities.errors || !userPossibleCities) {
    if (userToUser.fromUserToFriend.price && userToUser.fromFriendToUser.price) {
      if (userToUser.fromUserToFriend.price > userToUser.fromFriendToUser.price) {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({
          ...userToUser.fromFriendToUser,
          title: `Предложите другу прилететь к вам.
        Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
          type: 'fromFriendToUser',
        }))
        dispatch(userFlightsAC([]))
        dispatch(friendFlightsAC([]))
        dispatch(setMapAC(mapMarkers))
        return
      }
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromUserToFriend,
        title: `Предлагаем полететь в город друга.
          Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
        type: 'fromUserToFriend',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
      return
    } if (userToUser.fromUserToFriend.price && !userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromUserToFriend,
        title: `Предлагаем полететь в город друга.
          Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
        type: 'fromUserToFriend',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
      return
    } if (!userToUser.fromUserToFriend.price && userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromFriendToUser,
        title: `Предложите другу прилететь к вам.
        Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
        type: 'fromFriendToUser',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
      return
    }
    dispatch(actionLoaderFalse())
    dispatch(middleFlightsAC({
      title: 'К сожалению, нечего предложить. Попробуйте другую дату.',
    }))
    dispatch(userFlightsAC([]))
    dispatch(friendFlightsAC([]))
    dispatch(setMapAC([]))
    return
  }

  const userCitiForDate = userPossibleCities
    .filter((el) => el.depart_date === inputDate)

  const responseForFriendCities = await fetch(`${process.env.REACT_APP_MAP_AVIASALES}?origin_iata=${IATAcodes.destination.iata}&period=${date}:month&direct=false&one_way=true&no_visa=true&schengen=false&need_visa=false&locale=ru`)
  const friendPossibleCities = await responseForFriendCities.json()

  if (friendPossibleCities.errors || !friendPossibleCities) {
    if (userToUser.fromUserToFriend.price && userToUser.fromFriendToUser.price) {
      if (userToUser.fromUserToFriend.price > userToUser.fromFriendToUser.price) {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({
          ...userToUser.fromFriendToUser,
          title: `Предложите другу прилететь к вам.
        Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
          type: 'fromFriendToUser',
        }))
        dispatch(userFlightsAC([]))
        dispatch(friendFlightsAC([]))
        dispatch(setMapAC(mapMarkers))
        return
      }
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromUserToFriend,
        title: `Предлагаем полететь в город друга.
          Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
        type: 'fromUserToFriend',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
      return
    } if (userToUser.fromUserToFriend.price && !userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromUserToFriend,
        title: `Предлагаем полететь в город друга.
          Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
        type: 'fromUserToFriend',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
      return
    } if (!userToUser.fromUserToFriend.price && userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromFriendToUser,
        title: `Предложите другу прилететь к вам.
        Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
        type: 'fromFriendToUser',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
      return
    }
    dispatch(actionLoaderFalse())
    dispatch(middleFlightsAC({
      title: 'К сожалению, нечего предложить. Попробуйте другую дату.',
    }))
    dispatch(userFlightsAC([]))
    dispatch(friendFlightsAC([]))
    dispatch(setMapAC([]))
    return
  }

  const friendCitiForDate = friendPossibleCities
    .filter((el) => el.depart_date === inputDate)
  // Ищем общие города, в которые можно полететь в нужный день из обоих городов друзей.
  // Делаем 2 массива под каждого из друзей
  const userMiddleCities = []
  const friendMiddleCities = []
  userCitiForDate
    .forEach((userCity) => {
      friendCitiForDate
        .forEach((friendCity) => {
          if (userCity.destination === friendCity.destination) {
            userMiddleCities.push(userCity)
            friendMiddleCities.push(friendCity)
          }
        })
    })
  // Фильтруем города, чтобы были только русские города
  let rusUserMiddleCities = []
  citiesFromDB
    .forEach((rusCity) => {
      userMiddleCities
        .forEach((userCity) => {
          if (rusCity.code === userCity.destination) {
            rusUserMiddleCities
              .push({
                ...userCity,
                name: rusCity.name,
                origin_name: userToUser.fromUserToFriend.origin_name,
              })
          }
        })
    })

  let rusFriendMiddleCities = []
  citiesFromDB
    .forEach((rusCity) => {
      friendMiddleCities
        .forEach((friendCity) => {
          if (rusCity.code === friendCity.destination) {
            rusFriendMiddleCities
              .push({
                ...friendCity,
                name: rusCity.name,
                origin_name: userToUser.fromFriendToUser.origin_name,
              })
          }
        })
    })
    // Сортируем по цене и берем 3 самых дешевых
    // UPD пока не берем 3 самых дешевых, сортируем по имени, чтобы выводилось правильно
  rusUserMiddleCities = rusUserMiddleCities
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
  rusFriendMiddleCities = rusFriendMiddleCities
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
  // Делаем проверку, есть ли вообще города. в которые можно полететь,
  // а также, дешевле ли они, чем поездка между городами двух юзеров

  // 1. Проверяем, есть ли общие города и есть ли у каждого
  // хотя бы один город, куда можно полететь дешевле,
  // чем в город друг к другу
  // Если нет городов общих, или нет ни одного более дешевого, чем вылет напрямую к другу,
  // тогда заходим в первый if
  // Проверка в нем на наличие userToUser.fromUserToFriend.price проводится, так как
  // some отдает true, если userToUser.fromUserToFriend.price - undefined
  if (userToUser.fromUserToFriend.origin_name.toLowerCase()
  === userToUser.fromFriendToUser.origin_name.toLowerCase()) {
    dispatch(actionLoaderFalse())
    dispatch(middleFlightsAC({
      title: 'К сожалению, нечего предложить. Попробуйте другие города.',
    }))
    dispatch(userFlightsAC([]))
    dispatch(friendFlightsAC([]))
    dispatch(setMapAC([]))
  } else if (!rusUserMiddleCities.length
      || !rusFriendMiddleCities.length
      || (!rusUserMiddleCities.some((el) => el.value < userToUser.fromUserToFriend.price)
      && userToUser.fromUserToFriend.price)
      || (!rusFriendMiddleCities.some((el) => el.value < userToUser.fromFriendToUser.price)
      && userToUser.fromFriendToUser.price)) {
  // Проверка, если у обоих нет вариантов полететь друг к другу
    if (!userToUser.fromUserToFriend.price && !userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        title: 'К сожалению, нечего предложить. Попробуйте другую дату.',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC([]))
    // Проверка, если юзер не может полететь к другу, а друг может
    } else if (!userToUser.fromUserToFriend.price && userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromFriendToUser,
        title: `Предложите другу прилететь к вам.
        Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
        type: 'fromFriendToUser',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
    // Проверка, если юзер может полететь к другу, а друг не может
    } else if (userToUser.fromUserToFriend.price && !userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromUserToFriend,
        title: `Предлагаем полететь в город друга.
        Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
        type: 'fromUserToFriend',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
    // Если сюда дошли, то тут есть вариант полететь друг к другу напрямую в города
    // Поэтому проверяем, кому дешевле
    } else if (userToUser.fromUserToFriend.price > userToUser.fromFriendToUser.price) {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromFriendToUser,
        title: `Предложите другу прилететь к вам.
        Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
        type: 'fromFriendToUser',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
    // Если цены равны, то пусть друг летит к юзеру, раз юзер заморочился и поискал варианты
    } else {
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({
        ...userToUser.fromUserToFriend,
        title: `Предлагаем полететь в город друга.
        Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
        type: 'fromUserToFriend',
      }))
      dispatch(userFlightsAC([]))
      dispatch(friendFlightsAC([]))
      dispatch(setMapAC(mapMarkers))
    }
  // Если есть оба массива и возможность полететь друг к другу, заходим во второй if
  } else if (rusUserMiddleCities.length
      && rusFriendMiddleCities.length
      && userToUser.fromUserToFriend.price
      && userToUser.fromFriendToUser.price) {
    // если не все поездки в средние города дешевле, чем поездки напрямую,
    // то заходим сюда и фильтруем наши массивы
    if (!rusUserMiddleCities.every((el) => el.value < userToUser.fromUserToFriend.price)
        || !rusFriendMiddleCities.every((el) => el.value < userToUser.fromFriendToUser.price)) {
      rusUserMiddleCities = rusUserMiddleCities
        .filter((el) => el.value <= userToUser.fromUserToFriend.price)
      rusFriendMiddleCities = rusFriendMiddleCities
        .filter((el) => el.value <= userToUser.fromFriendToUser.price)
      const userArray = []
      const friendArray = []
      // после фильтрации снова делаем, чтобы были только совпадающие города в средних
      rusUserMiddleCities
        .forEach((userCity) => {
          rusFriendMiddleCities
            .forEach((friendCity) => {
              if (userCity.destination === friendCity.destination) {
                userArray.push(userCity)
                friendArray.push(friendCity)
              }
            })
        })
      // добавляем в массив меток наши средние города
      citiesFromDB
        .forEach((dbcity) => {
          userArray
            .forEach((city) => {
              if (dbcity.name === city.name) {
                mapMarkers.push(dbcity)
              }
            })
        })
        // Проверяем для случая, когда нам к другу дешевле лететь
      if (userToUser.fromUserToFriend.price > userToUser.fromFriendToUser.price) {
      // Проверяем, есть ли смысл предлагать вариант помимо средних городов.
      // Предлагаем только в том случае, если заплатить по половине стоимости
      // за один билет будет выгодно обоим
        if (userArray.some((el) => el.value >= userToUser.fromFriendToUser.price / 2)
      && friendArray.some((el) => el.value >= userToUser.fromFriendToUser.price / 2)
        ) {
          dispatch(actionLoaderFalse())
          dispatch(middleFlightsAC({
            ...userToUser.fromFriendToUser,
            title: `Есть еще варианты, но дороже.
          Предложите другу прилететь к вам.
          Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
            type: 'fromFriendToUser',
          }))
          dispatch(userFlightsAC(userArray))
          dispatch(friendFlightsAC(friendArray))
          dispatch(setMapAC(mapMarkers))
        } else {
          dispatch(actionLoaderFalse())
          dispatch(middleFlightsAC({}))
          dispatch(userFlightsAC(userArray))
          dispatch(friendFlightsAC(friendArray))
          dispatch(setMapAC(mapMarkers))
        }
        // Проверяем для случая, когда нам к другу дешевле лететь
      } else if (userToUser.fromUserToFriend.price <= userToUser.fromFriendToUser.price) {
      // Проверяем, есть ли смысл предлагать вариант помимо средних городов.
      // Предлагаем только в том случае, если заплатить по половине стоимости
      // за один билет будет выгодно обоим
        if (userArray.some((el) => el.value >= userToUser.fromUserToFriend.price / 2)
      && friendArray.some((el) => el.value >= userToUser.fromUserToFriend.price / 2)
        ) {
          dispatch(actionLoaderFalse())
          dispatch(middleFlightsAC({
            ...userToUser.fromUserToFriend,
            title: `Есть еще варианты, но дороже.
            Предлагаем полететь в город друга.
            Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
            type: 'fromUserToFriend',
          }))
          dispatch(userFlightsAC(userArray))
          dispatch(friendFlightsAC(friendArray))
          dispatch(setMapAC(mapMarkers))
        } else {
          dispatch(actionLoaderFalse())
          dispatch(middleFlightsAC({}))
          dispatch(userFlightsAC(userArray))
          dispatch(friendFlightsAC(friendArray))
          dispatch(setMapAC(mapMarkers))
        }
      } else {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({}))
        dispatch(userFlightsAC(userArray))
        dispatch(friendFlightsAC(friendArray))
        dispatch(setMapAC(mapMarkers))
      }
    // если все поездки в средние города все-таки дешевле, чем поездки напрямую
    // то добавляем в массив меток недостающие города из наших массивов городов
    } else {
      citiesFromDB
        .forEach((dbcity) => {
          rusUserMiddleCities
            .forEach((city) => {
              if (dbcity.name === city.name) {
                mapMarkers.push(dbcity)
              }
            })
        })
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({}))
      dispatch(userFlightsAC(rusUserMiddleCities))
      dispatch(friendFlightsAC(rusFriendMiddleCities))
      dispatch(setMapAC(mapMarkers))
    }
  // Третий if. Если есть массивы, но нет возможности между городами лететь
  // заполняем метки
  } else if (rusUserMiddleCities.length
    && rusFriendMiddleCities.length
    && !userToUser.fromUserToFriend.price
    && !userToUser.fromFriendToUser.price) {
    citiesFromDB
      .forEach((dbcity) => {
        rusUserMiddleCities
          .forEach((city) => {
            if (dbcity.name === city.name) {
              mapMarkers.push(dbcity)
            }
          })
      })
    dispatch(actionLoaderFalse())
    dispatch(middleFlightsAC({}))
    dispatch(userFlightsAC(rusUserMiddleCities))
    dispatch(friendFlightsAC(rusFriendMiddleCities))
    dispatch(setMapAC(mapMarkers))
  // Четвертый if. Если есть массивы и юзер может полететь к другу,
  // но друг к нам не может
  } else if (rusUserMiddleCities.length
    && rusFriendMiddleCities.length
    && userToUser.fromUserToFriend.price
    && !userToUser.fromFriendToUser.price) {
    if (!rusUserMiddleCities.every((el) => el.value < userToUser.fromUserToFriend.price)) {
      rusUserMiddleCities = rusUserMiddleCities
        .filter((el) => el.value <= userToUser.fromUserToFriend.price)
      const userArray = []
      const friendArray = []
      // после фильтрации снова делаем, чтобы были только совпадающие города в средних
      rusUserMiddleCities
        .forEach((userCity) => {
          rusFriendMiddleCities
            .forEach((friendCity) => {
              if (userCity.destination === friendCity.destination) {
                userArray.push(userCity)
                friendArray.push(friendCity)
              }
            })
        })
      // добавляем в массив меток наши средние города
      citiesFromDB
        .forEach((dbcity) => {
          userArray
            .forEach((city) => {
              if (dbcity.name === city.name) {
                mapMarkers.push(dbcity)
              }
            })
        })
      if (userArray.some((el) => el.value >= userToUser.fromUserToFriend.price / 2)
        && friendArray.some((el) => el.value >= userToUser.fromUserToFriend.price / 2)) {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({
          ...userToUser.fromUserToFriend,
          title: `Есть еще варианты, но дороже.
          Предлагаем полететь в город друга.
          Можно скинуться по ${userToUser.fromUserToFriend.price / 2} рублей`,
          type: 'fromUserToFriend',
        }))
        dispatch(userFlightsAC(userArray))
        dispatch(friendFlightsAC(friendArray))
        dispatch(setMapAC(mapMarkers))
      } else {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({}))
        dispatch(userFlightsAC(userArray))
        dispatch(friendFlightsAC(friendArray))
        dispatch(setMapAC(mapMarkers))
      }
    } else {
      citiesFromDB
        .forEach((dbcity) => {
          rusUserMiddleCities
            .forEach((city) => {
              if (dbcity.name === city.name) {
                mapMarkers.push(dbcity)
              }
            })
        })
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({}))
      dispatch(userFlightsAC(rusUserMiddleCities))
      dispatch(friendFlightsAC(rusFriendMiddleCities))
      dispatch(setMapAC(mapMarkers))
    }
  // Пятый if. Если есть массивы и друг может полететь к юзеру,
  // но юзер к другу не может
  } else if (rusUserMiddleCities.length
    && rusFriendMiddleCities.length
    && !userToUser.fromUserToFriend.price
    && userToUser.fromFriendToUser.price) {
    if (!rusFriendMiddleCities.every((el) => el.value < userToUser.fromFriendToUser.price)) {
      rusFriendMiddleCities = rusFriendMiddleCities
        .filter((el) => el.value <= userToUser.fromFriendToUser.price)
      const userArray = []
      const friendArray = []
      // после фильтрации снова делаем, чтобы были только совпадающие города в средних
      rusUserMiddleCities
        .forEach((userCity) => {
          rusFriendMiddleCities
            .forEach((friendCity) => {
              if (userCity.destination === friendCity.destination) {
                userArray.push(userCity)
                friendArray.push(friendCity)
              }
            })
        })
      // добавляем в массив меток наши средние города
      citiesFromDB
        .forEach((dbcity) => {
          userArray
            .forEach((city) => {
              if (dbcity.name === city.name) {
                mapMarkers.push(dbcity)
              }
            })
        })
      if (userArray.some((el) => el.value >= userToUser.fromFriendToUser.price / 2)
      && friendArray.some((el) => el.value >= userToUser.fromFriendToUser.price / 2)) {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({
          ...userToUser.fromFriendToUser,
          title: `Есть еще варианты, но дороже.
          Предложите другу прилететь к вам.
          Можно скинуться по ${userToUser.fromFriendToUser.price / 2} рублей`,
          type: 'fromFriendToUser',
        }))
        dispatch(userFlightsAC(userArray))
        dispatch(friendFlightsAC(friendArray))
        dispatch(setMapAC(mapMarkers))
      } else {
        dispatch(actionLoaderFalse())
        dispatch(middleFlightsAC({}))
        dispatch(userFlightsAC(userArray))
        dispatch(friendFlightsAC(friendArray))
        dispatch(setMapAC(mapMarkers))
      }
    } else {
      citiesFromDB
        .forEach((dbcity) => {
          rusUserMiddleCities
            .forEach((city) => {
              if (dbcity.name === city.name) {
                mapMarkers.push(dbcity)
              }
            })
        })
      dispatch(actionLoaderFalse())
      dispatch(middleFlightsAC({}))
      dispatch(userFlightsAC(rusUserMiddleCities))
      dispatch(friendFlightsAC(rusFriendMiddleCities))
      dispatch(setMapAC(mapMarkers))
    }
  } else {
    console.log('Такое не предусмотрели')
  }
}
