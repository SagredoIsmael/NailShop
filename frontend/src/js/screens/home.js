import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import MediaQuery from 'react-responsive'
import HeaderView from '../containers/headerContainers/headerContainer'
import SearchView from '../containers/searchContainers/searchViewContainer'
import OurServicesView from '../containers/ourServicesContainers/ourServicesContainer'
import InstaView from '../containers/socialNetworksContainers/instaContainer'
import FooterView from '../containers/headerContainers/footerContainer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 20% 30% 20% 20% 10% 5%;
  background: white;
  height: ${props => props.mobile ? "150vh" : "490vh"};
`;


const Home = () => (
  <>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <Wrapper>
        <HeaderView/>
        <SearchView/>
        <OurServicesView/>
        <InstaView/>
        <FooterView gridRow="7"/>
      </Wrapper>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <Wrapper mobile>
        <HeaderView/>
        <SearchView/>
        <OurServicesView/>
        <InstaView/>
        <FooterView gridRow="7"/>
      </Wrapper>
    </MediaQuery>
  </>
)

export default Home
