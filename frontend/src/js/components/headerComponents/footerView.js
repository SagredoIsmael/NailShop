import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import backGroundImage from '../../../img/footerView/footer.png'

const Wrapper = styled.div`
  display: grid;
  grid-row:7;
  background-image: url(${backGroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
`

const FooterView = ({openInstagramLink}) => (
  <Wrapper/>
)

export default FooterView
