import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import withRedux from 'next-redux-wrapper'

import CounterReducer from 'Counter/redux/CounterReducer'
import NewsListReducer from 'NewsList/redux/NewsListReducer'

export const initStore = (initialState = {}) => createStore(
  combineReducers({
    counter: CounterReducer,
    newsList: NewsListReducer
  }), 
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default withRedux(initStore);