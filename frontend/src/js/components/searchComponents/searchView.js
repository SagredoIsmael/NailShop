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
  display: grid;
  grid-row:2;
  background-image: url(${pinkBackGround});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top:-41%;
  z-index:5;

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

const SearchView = ({setServiceSearch, setPostalCodeSearch, setDateSearch, serviceTypeSearch, postalCodeSearch, dateSearch}) => (
  <Wrapper>

  </Wrapper>
)

export default SearchView
