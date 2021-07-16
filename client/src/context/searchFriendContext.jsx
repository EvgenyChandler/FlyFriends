/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useSelector } from 'react-redux'

firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGE_SEND_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APID_KEY}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
})

const firestore = firebase.firestore()

const searchFriendContext = createContext()

const SearchFriendContextProvider = ({ children }) => {
  const [flagSearchFriend, setFlag] = useState(false)
  const [deleteAndAddStatus, setDeleteAndAddStatus] = useState(false)
  const currentUser = useSelector((state) => state.users.currentUser)
  const [inputUserCity, setInputUserCity] = useState(currentUser?.city)
  const [inputFriendCity, setInputFriendCity] = useState('')
  const flagSearchFriendHendler = () => {
    setFlag(!flagSearchFriend)
  }

  const setFlagSearchHandler = (status) => {
    setFlag(status)
  }

  const [boxForFlight, setbBoxForFlight] = useState({})
  const [boxForChatFlight, setBoxForChatFlight] = useState({})

  const changeDeleteAndAddStatus = (status) => {
    setDeleteAndAddStatus(status)
  }

  const flightToBoxHandler = (flight) => {
    setbBoxForFlight(flight)
  }

  const chatBoxHandler = (flight) => {
    setBoxForChatFlight(flight)
  }

  return (
    <searchFriendContext.Provider
      value={{
        flagSearchFriend,
        flagSearchFriendHendler,
        setFlagSearchHandler,
        deleteAndAddStatus,
        changeDeleteAndAddStatus,
        boxForFlight,
        flightToBoxHandler,
        firebase,
        firestore,
        boxForChatFlight,
        chatBoxHandler,
        inputUserCity,
        setInputUserCity,
        inputFriendCity,
        setInputFriendCity,
      }}
    >
      {children}
    </searchFriendContext.Provider>
  )
}

export default SearchFriendContextProvider

const useSearchFriendContext = () => useContext(searchFriendContext)

export { useSearchFriendContext }
