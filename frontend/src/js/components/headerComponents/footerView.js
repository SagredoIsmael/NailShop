import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import backGroundImage from '../../../img/footerView/footer.png'

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

export default FooterView
