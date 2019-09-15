import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getProfessionals = get('professionals')

export const getItems = pipe(
  getProfessionals,
  get('items')
)

export const getLoading = pipe(
  getProfessionals,
  get('loading')
)

export const getError = pipe(
  getProfessionals,
  get('error') 
)
