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
  grid-template-columns: 18% 1fr 18%;
  grid-template-rows: 1fr;
  background: ${Colors.backgroundGrey};
  height: ${props => props.mobile ? "140vh" : "490vh"};
`;

const SubWrapper = styled.div`
  display: grid;
  grid-column:2;
  background: white;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 20% 30% 20% 5%;
`;


export default class home extends React.Component {

  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
          <Wrapper>
            <SubWrapper>
              <HeaderView/>
              <SearchView/>
              <OurServicesView/>
              <InstaView/>
            </SubWrapper>
          </Wrapper>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <Wrapper mobile>
            <SubWrapper>
              <HeaderView/>
              <SearchView/>
              <OurServicesView/>
              <InstaView/>
            </SubWrapper>
          </Wrapper>
        </MediaQuery>
      </div>
    )
  }

  /*render() {
    return (
      <Container>
        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
          <SubWrapper>
            <HeaderView/>
            <SearchView/>
            <OurServicesView/>
            <InstaView/>
            <FooterView/>
          </SubWrapper>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          Esta página aún no está disponible en la versión móvil, estamos trabajando en ello...
          Por favor abrela desde tu PC
        </MediaQuery>
      </Container>
    )
  }*/

}
