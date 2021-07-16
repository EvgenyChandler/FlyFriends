import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import initState from './initState'
import rootSaga from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store
