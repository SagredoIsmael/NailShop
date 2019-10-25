import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import backGroundImage from '../../../assets/img/footerView/footer.png'

const Wrapper = styled.div`
  display: grid;
  grid-row: ${props => props.gridRow};
  background-image: url(${backGroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
`

const FooterView = ({gridRow}) => (
  <Wrapper gridRow={gridRow}/>
)

export default FooterView
