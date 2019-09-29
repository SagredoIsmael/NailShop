import { connect } from 'react-redux'
import { openInstagramLink } from '../../actions/UI'
import OurTeamView from '../../components/ourServicesComponents/ourTeamView'

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
  mapDispatchToProps)(OurTeamView)
