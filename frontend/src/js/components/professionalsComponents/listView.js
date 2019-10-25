import React, { useEffect } from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { SimpleButton } from '../muiComponents/buttons'
import pinkBackGround from '../../../assets/img/searchView/background.png'
import { TextFieldDownshift, TextfieldOutline } from '../muiComponents/textFields'
import { SpinnerRound } from '../spinnersComponents/spinnerRound'
import Item from './itemView'

const Wrapper = styled.div`
  display: grid;
  grid-row:2;
  background-color: white;
`

const ListView = ({fetchProfessionals, loading, items}) => {
  useEffect(() => { fetchProfessionals() }, [])
    return (
    <Wrapper>
      { loading ? <SpinnerRound/> : <SpinnerRound/> }
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Wrapper>
  )
}


export default ListView
