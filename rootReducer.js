import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DummyReducer from './src/Components/DummyReducer'
import DateRangeRowReducer from './src/Components/DateRangerow/DateRangeRowReducer'

const rootReducer = combineReducers({
    dummy : DummyReducer,
    dateRange : DateRangeRowReducer
})

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
)

export default store