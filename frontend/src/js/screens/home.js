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
  grid-template-rows: 15% 80% 5%;
  background: ${Colors.backgroundGrey};
  height: ${props => props.mobile ? "150vh" : "490vh"};
`;

const MarginsWrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-template-columns: 14.2% 1fr 13.6%;
  grid-template-rows: 100%;
`;

const ComponentsWrapper = styled.div`
  display: grid;
  grid-column:2;
  grid-template-columns: 100%;
  grid-template-rows: 20% 40% 20% 20%;
  background-color: white;
`;


const Home = () => (
  <>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <Wrapper>
        <HeaderView/>
        <MarginsWrapper>
          <ComponentsWrapper>
            <SearchView/>
            <OurServicesView/>
            <InstaView/>
          </ComponentsWrapper>
        </MarginsWrapper>
        <FooterView/>
      </Wrapper>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
    <Wrapper mobile>
      <HeaderView/>
      <MarginsWrapper>
        <ComponentsWrapper>
          <SearchView/>
          <OurServicesView/>
          <InstaView/>
        </ComponentsWrapper>
      </MarginsWrapper>
      <FooterView/>
    </Wrapper>
    </MediaQuery>
  </>
)

export default Home
