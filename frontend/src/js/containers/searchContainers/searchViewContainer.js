import { connect } from 'react-redux'
import SearchView from '../../components/searchComponents/searchView'
import { setSearchService, setPostalCodeSearch, setDateSearch } from '../../actions/search'

const mapStateToProps = state => {
  return {test:state}
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
