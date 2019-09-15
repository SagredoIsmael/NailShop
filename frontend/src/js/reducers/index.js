import {combineReducers} from 'redux'
import UIReducer from './UI'
import searchReducer from './search'
import professionalsReducer from './professionals'


export const rootReducer = combineReducers({
  UI: UIReducer,
  search: searchReducer,
  professionals: professionalsReducer
})

export default rootReducer
