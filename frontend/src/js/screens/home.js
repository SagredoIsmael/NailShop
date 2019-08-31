import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import MediaQuery from 'react-responsive'
import HeaderView from '../containers/headerContainers/headerContainer'
import SearchView from '../containers/searchContainers/searchViewContainer'
import OurServicesView from '../containers/ourServicesContainers/ourServicesContainer'
import InstaView from '../containers/socialNetworksContainers/instaContainer'
import FooterView from '../containers/headerContainers/footerContainer'

const Wrapper = styled.section`
  display: flex;
  flex:1;
  background: ${Colors.backgroundGrey};
`;

const SubWrapper = styled.section`
  display: flex;
  flex:1;
  margin-left: 10rem;
  margin-right: 10rem;
  background: white;
  flex-direction:column;
`;

export default class home extends React.Component {

  render() {
    return (
      <Wrapper>
        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>  {/* It's desktop or laptop*/}
          <SubWrapper>
            <HeaderView/>
            <SearchView/>
            <OurServicesView/>
            <InstaView/>
            <FooterView/>
          </SubWrapper>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>  {/* It's mobile device*/}
          Esta página aún no está disponible en la versión móvil, estamos trabajando en ello...
          Por favor abrela desde tu PC
        </MediaQuery>
      </Wrapper>
    )
  }

}
