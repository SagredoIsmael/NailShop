import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import HeaderView from '../components/headerView'
import InstagramView from '../components/instagramView'
import InputDataView from '../components/inputDataView'

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

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
        <SubWrapper>
          <HeaderView/>
          <InputDataView/>
          <InstagramView/>
        </SubWrapper>
      </Wrapper>
    )
  }

}
