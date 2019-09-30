import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { Link } from 'react-router-dom'
import { SimpleButton } from '../muiComponents/buttons'
import backgroundImage from '../../../img/ourServicesView/background.png'
import manicuraImage from '../../../img/ourServicesView/manicura.png'
import peinadosImage from '../../../img/ourServicesView/peinados.png'
import coloracionImage from '../../../img/ourServicesView/coloracion.png'
import depilacionImage from '../../../img/ourServicesView/depilacion.png'
import n1Image from '../../../img/ourServicesView/n1.png'
import n2Image from '../../../img/ourServicesView/n2.png'
import n3Image from '../../../img/ourServicesView/n3.png'


const Wrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-columns: 100%;
  grid-template-rows: 5% 10% 18% 5% 5% 8% 43% 3% 7%;
`

const Title = styled.h1`
  display: grid;
  grid-row: ${props => props.gridRow};
  font-size: 2.5vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin:0;
`

const TextContain = styled.p`
  display: grid;
  grid-row: ${props => props.gridRow};
  font-size: 1.5vw;
  text-align: center;
  margin-left: 4vw;
  margin-right: 4vw;
  margin:0;
`

const ImagesWrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-columns: 5% 22% 22% 22% 22% 5%;
  grid-template-rows: 100%;
  justify-items:center;
`

const Image = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
`

const BackgroundWrapper = styled.div`
  display: grid;
  grid-row:7;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 25% 25% 25% 25%;
  justify-items: center;
  margin-left: 2vw;
  margin-right: 2vw;
`

const ImageSectionWrapper = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
`

const TextSectionWrapper = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  font-size: ${props => props.fontSize};
  text-align: center;
  font-family: 'Rozha One', serif;
  margin-left: 2vw;
  margin-right: 2vw;
  align-content: center;
  color: ${props => props.color};
`

const DefaultWrapper = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  justify-content:center;
`


const OurServicesView = ({openInstagramLink}) => (
  <Wrapper>
    <Title gridRow="1">
      QUÉ OFRECEMOS
    </Title>
    <TextContain gridRow="2">
      Todo lo que queremos lo tenemos en casa a un click, ¿por qué debería ser distinto en servicios de belleza y manicura?. <br />
      Orgasmi ha nacido para que estés estupend@ sin moverte de casa o del trabajo. <br />
      De momento tenemos disponibles los siguientes servicios:
    </TextContain>
    <ImagesWrapper>
      <Image gridColumn="2">
        <Link to="/professionals">
          <img style={{width: '18vw'}} src={manicuraImage} alt="manicuraImage" />
        </Link>
      </Image>
      <Image gridColumn="3">
        <img style={{width: '18vw'}} src={peinadosImage} alt="peinadosImage" />
      </Image>
      <Image gridColumn="4">
        <img style={{width: '18vw'}} src={coloracionImage} alt="coloracionImage" />
      </Image>
      <Image gridColumn="5">
        <img style={{width: '18vw'}} src={depilacionImage} alt="depilacionImage" />
      </Image>
    </ImagesWrapper>
    <Title gridRow="5">
      CÓMO
    </Title>
    <TextContain gridRow="6">
      Orgasmi propone un nuevo concepto sobre belleza, ¡a domicilio!. <br />
      Selecciona el tratamiento, el día y la hora, escoge el/la profesional que más te guste, por su cercanía, puntualidad, buen servicio, etc. <br />
      Tod@s l@s profesionales han sido seleccionad@s en base a critérios muy altos para que quedes totalmente satisfech@.
    </TextContain>
    <BackgroundWrapper>
      <ImageSectionWrapper gridRow="1" gridColumn="1">
        <img style={{width: '15vw'}} src={n1Image} alt="n1Image" />
      </ImageSectionWrapper>
      <TextSectionWrapper gridRow="2" gridColumn="1" fontSize="2.5vw">
        SELECCIONA <br />
        EL SERVICIO
      </TextSectionWrapper>
      <TextSectionWrapper gridRow="3" gridColumn="1" fontSize="1.5vw" color="darkblue">
        Súper fácil, sigue los pasos del calendario y ¡Walá! <br />
        Si tienes dudas estamos para ayudarte a través del teléfono o correo.
      </TextSectionWrapper>
      <ImageSectionWrapper gridRow="2" gridColumn="2">
        <img style={{width: '15vw'}} src={n2Image} alt="n2Image" />
      </ImageSectionWrapper>
      <TextSectionWrapper gridRow="3" gridColumn="2" fontSize="2.5vw">
        DINOS DÓNDE <br />
        Y CUÁNDO
      </TextSectionWrapper>
      <TextSectionWrapper gridRow="4" gridColumn="2" fontSize="1.5vw" color="darkblue">
        Ingresa tu código postal y verás todas las profesionales en tu zona. <br />
        Tú decides dónde quieres recibir el servicio.
      </TextSectionWrapper>
      <ImageSectionWrapper gridRow="1" gridColumn="3">
        <img style={{width: '15vw'}} src={n3Image} alt="n3Image" />
      </ImageSectionWrapper>
      <TextSectionWrapper gridRow="2" gridColumn="3" fontSize="2.5vw">
        PAGA Y ¡PRESUME!
      </TextSectionWrapper>
      <TextSectionWrapper gridRow="3" gridColumn="3" fontSize="1.5vw" color="darkblue">
        Si no quedas satisfech@ te devolvemos el dinero. <br />
        Y si estás content@, puntúa a nuestr@ profesional y os bonificaremos a l@s dos!
      </TextSectionWrapper>
    </BackgroundWrapper>
    <DefaultWrapper gridColumn="1" gridRow="9">
      <Link to="/professionals" style={{ textDecoration: 'none', justifySelf: 'center' }}>
        <SimpleButton text="RESERVAR" style={{width: '15vw', height: '4.60vw', fontSize: '1.3vw', padding:'inherit'}} onClick={() => null}/>
      </Link>
    </DefaultWrapper>
  </Wrapper>
)

export default OurServicesView
