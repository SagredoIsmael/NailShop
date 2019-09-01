import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getSearch = get('search')

export const getServiceTypeSearch = pipe(
  getSearch,
  get('serviceType')
)

export const getPostalCodeSearch = pipe(
  getSearch,
  get('postalCode')
)

export const getDateSearch = pipe(
  getSearch,
  get('date')
)
