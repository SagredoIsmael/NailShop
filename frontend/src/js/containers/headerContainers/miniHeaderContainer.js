import { connect } from 'react-redux'
import { openInstagramLink } from '../../actions/UI'
import MiniHeaderView from '../../components/headerComponents/miniHeaderView'

const mapStateToProps = state => {
  return {test:state}
}

const mapDispatchToProps = dispatch => {
  return {
    openInstagramLink: () => {
      dispatch(openInstagramLink())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniHeaderView)
