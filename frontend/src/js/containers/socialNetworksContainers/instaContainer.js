import { connect } from 'react-redux'
import { openInstagramLink } from '../../redux/actions/UI'
import InstaView from '../../components/socialNetworksComponents/instaView'

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
)(InstaView)
