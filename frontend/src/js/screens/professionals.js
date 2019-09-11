import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import MediaQuery from 'react-responsive'
import MiniHeaderView from '../containers/headerContainers/miniHeaderContainer'
import FooterView from '../containers/headerContainers/footerContainer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 80% 5%;
  background: ${Colors.backgroundGrey};
  height: ${props => props.mobile ? "50vh" : "200vh"};
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

const Professionals = () => (
  <>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <Wrapper>
        <MiniHeaderView/>
        <MarginsWrapper>
          <ComponentsWrapper>

          </ComponentsWrapper>
        </MarginsWrapper>
        <FooterView/>
      </Wrapper>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
    <Wrapper mobile>
      <MiniHeaderView/>
      <MarginsWrapper>
        <ComponentsWrapper>

        </ComponentsWrapper>
      </MarginsWrapper>
      <FooterView/>
    </Wrapper>
    </MediaQuery>
  </>
)

export default Professionals
