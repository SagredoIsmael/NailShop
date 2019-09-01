import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { SimpleButton } from '../muiComponents/buttons'
import pinkBackGround from '../../../img/searchView/background.png'
import { TextFieldDownshift, TextfieldOutline } from '../muiComponents/textFields'
import calendarIcon from '../../../img/searchView/icon_calendar.jpg'
import nailPolishIcon from '../../../img/searchView/icon_nail_polish.jpg'
import locationIcon from '../../../img/searchView/icon_location.jpg'


const Wrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${pinkBackGround});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top;
  position:relative
  z-index:0;
  margin-top: -38rem;
`

const SubWrapper = styled.div`
  display: flex;
  border-radius: 2rem;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-top:20rem;
`

const TextFieldWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  background-color: white;
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin: 2.5rem;
  margin-left: 5rem;
  margin-right: 5rem;
`

const SearchView = ({setServiceSearch}) => (
  <Wrapper>
    <SubWrapper>
    <Title>
      DINOS QUÉ, CUÁNDO Y DÓNDE
    </Title>
    <TextFieldWrapper>
      <TextFieldDownshift placeholder = "Escoge tu tratamiento" style={{margin: '2rem'}} icon={nailPolishIcon}/>
      <TextfieldOutline placeholder = "Código postal" style={{margin: '2rem', marginTop:'3rem'}} icon={locationIcon}/>
    </TextFieldWrapper>
     <TextfieldOutline placeholder = "Fecha y hora" style={{margin: '2rem'}} icon={calendarIcon}/>

    </SubWrapper>
    <Link to="/professionals" style={{ textDecoration: 'none' }}>
      <SimpleButton text="BOOKEAR" style={{display:'flex', marginBottom: '20rem', marginTop: '2rem'}} onClick={() => null}/>
    </Link>
  </Wrapper>
)

export default SearchView
