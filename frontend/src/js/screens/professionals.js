import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import MediaQuery from 'react-responsive'
import MiniHeaderView from '../containers/headerContainers/miniHeaderContainer'
import FooterView from '../containers/headerContainers/footerContainer'
import ListProfessionalsView from '../containers/professionalsContainers/listViewContainer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 40% 20% 20%;
  background: white;
  height: ${props => props.mobile ? "50vh" : "200vh"};
`;

const Professionals = () => (
  <>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <Wrapper>
        <MiniHeaderView/>
        <ListProfessionalsView/>
        <FooterView gridRow="4"/>
      </Wrapper>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
    <Wrapper mobile>
      <MiniHeaderView/>
      <ListProfessionalsView/>
      <FooterView gridRow="4"/>
    </Wrapper>
    </MediaQuery>
  </>
)

export default Professionals
