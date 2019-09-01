import { SET_SERVICE_SEARCH, SET_POSTAL_CODE_SEARCH, SET_DATE_SEARCH } from '../actions/types'
import Constants from '../utils/globalConstants'

const initialState = {
  serviceType : null,
  postalCode: null,
  date: null
}

export default (state = initialState, action) => {
  switch(action.type){

    case SET_SERVICE_SEARCH:
      return {...state, serviceType: action.payload}

    case SET_POSTAL_CODE_SEARCH:
      return {...state, postalCode: action.payload}

    case SET_DATE_SEARCH:
      return {...state, date: action.payload}

    default:
      return state
  }
}
