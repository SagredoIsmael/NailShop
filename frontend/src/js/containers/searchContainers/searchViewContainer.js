import { connect } from 'react-redux'
import SearchView from '../../components/searchComponents/searchView'
import { setServiceSearch, setPostalCodeSearch, setDateSearch } from '../../actions/search'
import { getServiceTypeSearch, getPostalCodeSearch, getDateSearch } from '../../selectors/search'

const mapStateToProps = state => {
  return {
    serviceTypeSearch: getServiceTypeSearch(state),
    postalCodeSearch: getPostalCodeSearch(state),
    dateSearch: getDateSearch(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setServiceSearch: (service) => {
      dispatch(setServiceSearch(service))
    },
    setPostalCodeSearch: (postalCode) => {
      dispatch(setPostalCodeSearch(postalCode))
    },
    setDateSearch: (date) => {
      dispatch(setDateSearch(date))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView)
