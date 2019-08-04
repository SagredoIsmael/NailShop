import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import { MiniHeaderView } from '../components/headerView'
import FooterView from '../components/footerView'

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

export default class professionals extends React.Component {

  render() {
    return (
      <Wrapper>
        <SubWrapper>
          <MiniHeaderView/>
          <FooterView/>
        </SubWrapper>
      </Wrapper>
    )
  }

}
