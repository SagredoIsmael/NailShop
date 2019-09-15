import { REQUEST_FETCH_PROFESSIONALS, SUCCESS_FETCH_PROFESSIONALS, ERROR_FETCH_PROFESSIONALS } from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {

  switch(action.type) {

    case REQUEST_FETCH_PROFESSIONALS:
      return {
        ...state,
        loading: true,
        error: null
      }

    case SUCCESS_FETCH_PROFESSIONALS:
      return {
        ...state,
        loading: false,
        items: action.payload
      }

    case ERROR_FETCH_PROFESSIONALS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      }

    default:
      return state;
  }
}
