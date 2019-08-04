import React from 'react'
import { connect } from 'react-redux'
import { openInstagramLink } from '../redux/actions/UI'
import styled from 'styled-components'
import Colors from '../utils/colors'
import backGroundImage from '../../img/footerView/footer.png'

const Wrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: 13rem;
  margin-top: 4rem;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${backGroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  z-index:1;
`

const FooterView = ({openInstagramLink}) => (
  <Wrapper/>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(FooterView)
