import { connect } from 'react-redux'
import { openInstagramLink } from '../../actions/UI'
import OurServicesView from '../../components/ourServicesComponents/ourServicesView'

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
  mapDispatchToProps)(OurServicesView)
