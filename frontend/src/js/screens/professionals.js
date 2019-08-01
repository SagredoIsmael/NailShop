import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class professionals extends React.Component {

  render() {
    return (
      <div>
        <Wrapper>
          <Title>Selecciona profesional</Title>
        </Wrapper>
      </div>
    )
  }

}
