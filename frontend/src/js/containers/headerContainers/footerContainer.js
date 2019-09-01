import { connect } from 'react-redux'
import { openInstagramLink } from '../../actions/UI'
import FooterView from '../../components/headerComponents/footerView'


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
)(FooterView)
