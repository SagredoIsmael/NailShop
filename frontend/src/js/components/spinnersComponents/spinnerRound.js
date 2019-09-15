import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { ClipLoader } from 'react-spinners';


const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`

export const SpinnerRound = () => (
  <Wrapper>
    <ClipLoader
      sizeUnit={"vw"}
      size={10}
      color={Colors.purpleButton}
      loading={true}  />
  </Wrapper>
)
