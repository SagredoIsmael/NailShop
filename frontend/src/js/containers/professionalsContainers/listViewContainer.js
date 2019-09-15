import { connect } from 'react-redux'
import ListView from '../../components/professionalsComponents/listView'
import { fetchProfessionals } from '../../actions/professionals'
import { getItems, getLoading, getError } from '../../selectors/professionals'

const mapStateToProps = state => {
  return {
    items: getItems(state),
    loading: getLoading(state),
    error: getError(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfessionals: () => {
      dispatch(fetchProfessionals())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView)
