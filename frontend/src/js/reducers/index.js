import {combineReducers} from 'redux'
import UIreducer from './UI'

export const rootReducer = combineReducers({
  UI: UIreducer
})

export default rootReducer
