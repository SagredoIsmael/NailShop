import {combineReducers} from 'redux'
import UIReducer from './UI'
import searchReducer from './search'

export const rootReducer = combineReducers({
  UI: UIReducer,
  search: searchReducer
})

export default rootReducer
