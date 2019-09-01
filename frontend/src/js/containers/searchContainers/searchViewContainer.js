import { connect } from 'react-redux'
import SearchView from '../../components/searchComponents/searchView'
import { openInstagramLink } from '../../actions/UI'

const mapStateToProps = state => {
  return {test:state}
}

const mapDispatchToProps = dispatch => {
  return {
    openInstagramLink: () => {
      dispatch(openInstagramLink())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView)
