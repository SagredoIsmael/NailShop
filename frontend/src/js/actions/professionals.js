import { REQUEST_FETCH_PROFESSIONALS, SUCCESS_FETCH_PROFESSIONALS, ERROR_FETCH_PROFESSIONALS } from './types'

export const requestFetchProfessionals = () => {
  return {
    type: REQUEST_FETCH_PROFESSIONALS,
  }
}

export const succesFetchProfessionals = (professionals) => {
  return {
    type: SUCCESS_FETCH_PROFESSIONALS,
    payload: professionals
  }
}

export const errorFetchProfessionals = (professionals) => {
  return {
    type: ERROR_FETCH_PROFESSIONALS,
    payload: professionals
  }
}

export const fetchProfessionals = () => (dispatch, getState) =>  {
  dispatch(requestFetchProfessionals())
  fetch("http://85.208.21.71/api/professionals/")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(succesFetchProfessionals(json))
    })
    .catch(error => dispatch(errorFetchProfessionals(error)))
}


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
