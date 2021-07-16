import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './index.css'
import SearchFriendContextProvider from './context/searchFriendContext'

ReactDOM.render(
  <Provider store={store}>
    <SearchFriendContextProvider>
      <App />
    </SearchFriendContextProvider>
  </Provider>,
  document.getElementById('root'),
)
