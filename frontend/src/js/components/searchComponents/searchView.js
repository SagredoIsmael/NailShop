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
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 55% 5%;
  background-image: url(${pinkBackGround});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const InputDataWrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-column:2;
  grid-template-columns: 100%;
  grid-template-rows: 10% 20% 60% 10%;
  border-radius: 1vw;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`

const Title = styled.h1`
  display: grid;
  grid-row:2;
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const TextFieldsWrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-columns: 100%;
  grid-template-rows: 10% 35% 10% 35% 10%;
`

const TextFieldsUpWrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-template-columns: 10% 40% 40% 10%;
  grid-template-rows: 100%;
`

const TextFieldServiceWrapper = styled.div`
  display: grid;
  grid-column:2;
`

const TextFieldPostalCodeWrapper = styled.div`
  display: grid;
  grid-column:3;
`

const TextFieldDateWrapper = styled.div`
  display: grid;
  grid-row:4;
  justify-content:center;
`

const BookearButton = styled.div`
  display: grid;
  grid-row:3;
  grid-column:2;
`

const SearchView = ({setServiceSearch, setPostalCodeSearch, setDateSearch, serviceTypeSearch, postalCodeSearch, dateSearch}) => (
  <Wrapper>
    <InputDataWrapper>
      <Title>
        DINOS QUÉ, CUÁNDO Y DÓNDE
      </Title>
      <TextFieldsWrapper>
        <TextFieldsUpWrapper>
          <TextFieldServiceWrapper>
              <TextFieldDownshift placeholder = "Escoge tu tratamiento" style={{width: '15vw', margin:'1vw'}} icon={nailPolishIcon} onChange={() => console.log('@@@@@@@change')}/>
          </TextFieldServiceWrapper>
          <TextFieldPostalCodeWrapper>
            <TextfieldOutline placeholder = "Código postal" style={{width: '15vw', margin:'1vw'}} icon={locationIcon} onChange={(e) => setPostalCodeSearch(e)}/>
          </TextFieldPostalCodeWrapper>
        </TextFieldsUpWrapper>
        <TextFieldDateWrapper>
          <TextfieldOutline placeholder = "Fecha y hora" style={{width: '15vw', margin:'1vw'}} icon={calendarIcon} onChange={(e) => setDateSearch(e)}/>
        </TextFieldDateWrapper>
      </TextFieldsWrapper>
    </InputDataWrapper>
    <BookearButton>
      <Link to="/professionals" style={{ textDecoration: 'none', justifySelf: 'center' }}>
        <SimpleButton text="BOOKEAR" style={{width: '8vw', height: '2.5vw', fontSize: '1vw', padding:'inherit'}} onClick={() => null}/>
      </Link>
    </BookearButton>
  </Wrapper>
)


export default SearchView
