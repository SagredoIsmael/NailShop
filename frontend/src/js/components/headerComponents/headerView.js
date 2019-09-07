import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import backGroundImage from '../../../img/headerView/header.png'
import miniBackGroundImage from '../../../img/headerView/mini-header.png'

const Wrapper = styled.div`
  display: grid;
  grid-row:1;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  background-image: url(${backGroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index:6;
`

const SubWrapper = styled.div`
  grid-column-start:1;
  grid-column-end:1;
  grid-row-start:1;
  grid-row-end:2;
  background: red;
`;


const MiniWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  height:300px;
  background-image: url(${miniBackGroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  z-index:1;
`

const HeaderView = ({openInstagramLink}) => (
  <Wrapper/>
)

export const MiniHeaderView = ({openInstagramLink}) => (
  <MiniWrapper/>
)

export default HeaderView
