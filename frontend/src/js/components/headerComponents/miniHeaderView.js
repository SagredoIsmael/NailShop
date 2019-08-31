import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import miniBackGroundImage from '../../../img/headerView/mini-header.png'

const MiniWrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${miniBackGroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  z-index:1;
`

export const MiniHeaderView = ({openInstagramLink}) => (
  <MiniWrapper/>
)

export default MiniHeaderView
