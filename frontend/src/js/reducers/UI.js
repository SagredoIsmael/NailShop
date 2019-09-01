import { OPEN_INSTAGRAM_LINK } from '../actions/types'
import Constants from '../utils/globalConstants'

const initialState = {
  isInstagramLinkOpen : false,
}

export default (state = initialState, action) => {
  switch(action.type){

    case OPEN_INSTAGRAM_LINK:
      window.open(Constants.urlInstagram, "_blank")
      return {...state, isInstagramLinkOpen: true}

    default:
      return state
  }
}
