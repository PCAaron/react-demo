import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import AppSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer =applyMiddleware(sagaMiddleware)
const store = createStore(reducers,enhancer)
sagaMiddleware.run(AppSagas)
export default store
