import { SET_SERVICE_SEARCH, SET_POSTAL_CODE_SEARCH, SET_DATE_SEARCH } from './types'

export const setServiceSearch = (service) => {
  return {
    type: SET_SERVICE_SEARCH,
    payload: service
  }
}

export const setPostalCodeSearch = (postalCode) => {
  return {
    type: SET_POSTAL_CODE_SEARCH,
    payload: postalCode
  }
}

export const setDateSearch = (date) => {
  return {
    type: SET_DATE_SEARCH,
    payload: date
  }
}
