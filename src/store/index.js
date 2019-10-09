import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
// import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer =applyMiddleware(sagaMiddleware)
const store = createStore(reducers)
//sagaMiddleware.run(sagas)
export default store
