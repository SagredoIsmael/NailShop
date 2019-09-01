import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getUI = get('UI')

export const getIsInstagramLinkIsOpen = pipe(
  getUI,
  get('isInstagramLinkOpen')
)
