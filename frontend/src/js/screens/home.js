import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import MediaQuery from 'react-responsive'
import Header from '../containers/headerContainers/headerContainer'
import Search from '../containers/searchContainers/searchViewContainer'
import OurServices from '../containers/ourServicesContainers/ourServicesContainer'
import OurTeam from '../containers/ourServicesContainers/ourTeamContainer'
import OurReviews from '../containers/ourServicesContainers/ourReviewsContainer'
import Insta from '../containers/socialNetworksContainers/instaContainer'
import Footer from '../containers/headerContainers/footerContainer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 14% 20% 37% 20% 20% 5%;
  background: white;
  height: ${props => props.mobile ? "150vh" : "470vh"};
`;


const Home = () => (
  <>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <Wrapper>
        <Header/>
        <Search/>
        <OurServices/>
        <OurReviews/>
        <OurTeam/>
        <Footer gridRow="6"/>
      </Wrapper>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <Wrapper mobile>
        <Header/>
        <Search/>
        <OurServices/>
        <OurReviews/>
        <OurTeam/>
        <Footer gridRow="6"/>
      </Wrapper>
    </MediaQuery>
  </>
)

export default Home
