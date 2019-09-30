import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { Link } from 'react-router-dom'
import { SimpleButton } from '../muiComponents/buttons'
import maletinImage from '../../../img/ourServicesView/ourTeam/maletin.jpg'
import moneyImage from '../../../img/ourServicesView/ourTeam/money.jpg'
import handMoneyImage from '../../../img/ourServicesView/ourTeam/hand_money.jpg'
import capImage from '../../../img/ourServicesView/ourTeam/cap.jpg'

const Wrapper = styled.div`
  display: grid;
  grid-row:5;
  grid-template-columns: 100%;
  grid-template-rows: 10% 10% 50% 15% 15%;
`

const Title = styled.h1`
  display: grid;
  grid-row: ${props => props.gridRow};
  font-size: 2.5vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const ImagesWrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-columns: 5% 22% 22% 22% 22% 5%;
  grid-template-rows: 100%;
  text-align: -webkit-center;
`

const Image = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
`

const TextSectionWrapper = styled.div`
  display: grid;
  font-size: ${props => props.fontSize};
  font-family: 'Rozha One', serif;
  margin-left: 2vw;
  margin-right: 2vw;
  color: ${props => props.color};
`

const DefaultWrapper = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  justify-content:center;
`


const OurTeamView = ({openInstagramLink}) => (
  <Wrapper>
    <Title gridRow="1">
      ÚNETE A NUESTRO EQUIPO
    </Title>

    <ImagesWrapper>
      <Image gridColumn="2">
        <img style={{width: '18vw'}} src={maletinImage} alt="maletinImage" />
        <TextSectionWrapper  fontSize="1.5vw" color="black">
          sé tu propia jefa
        </TextSectionWrapper>
      </Image>
      <Image gridColumn="3">
        <img style={{width: '18vw'}} src={moneyImage} alt="moneyImage" />
        <TextSectionWrapper  fontSize="1.5vw" color="black">
          gana más que en un centro de estética
        </TextSectionWrapper>
      </Image>
      <Image gridColumn="4">
        <img style={{width: '18vw'}} src={handMoneyImage} alt="handMoneyImage" />
        <TextSectionWrapper  fontSize="1.5vw" color="black">
          gana increíbles comisiones
        </TextSectionWrapper>
      </Image>
      <Image gridColumn="5">
        <img style={{width: '18vw'}} src={capImage} alt="capImage" />
        <TextSectionWrapper  fontSize="1.5vw" color="grey">
          aprende mediante nuestro plan de carrera formativo
        </TextSectionWrapper>
      </Image>
    </ImagesWrapper>
    <DefaultWrapper gridColumn="1" gridRow="5">
      <Link to="/OurProfessionals" style={{ textDecoration: 'none', justifySelf: 'center' }}>
        <SimpleButton text="¡ÚNETE AHORA!" style={{width: '15vw', height: '4.60vw', fontSize: '1.3vw', padding:'inherit'}} onClick={() => null}/>
      </Link>
    </DefaultWrapper>
  </Wrapper>
)

export default OurTeamView
