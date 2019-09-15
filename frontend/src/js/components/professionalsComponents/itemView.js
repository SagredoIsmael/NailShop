import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { TextFieldDownshift, TextfieldOutline } from '../muiComponents/textFields'
import { SpinnerRound } from '../spinnersComponents/spinnerRound'


const Wrapper = styled.div`
  display: grid;
  background-color: white;
`

const ItemView = ({item}) => {
    return (
    <Wrapper>
      {item.name}
      {item.surname}
      {item.telephone_number_1}
      {item.mail}
    </Wrapper>
  )
}


export default ItemView
