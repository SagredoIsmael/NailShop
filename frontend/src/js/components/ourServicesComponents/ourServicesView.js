import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
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
  grid-row:2;
  grid-template-columns: 100%;
  grid-template-rows: 10% 15% 18% 10% 15% 32%;
`

const Title = styled.h1`
  display: grid;
  grid-row: ${props => props.gridRow};
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const TextContain = styled.h1`
  display: grid;
  grid-row: ${props => props.gridRow};
  font-size: 1vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin-left: 4vw;
  margin-right: 4vw;
`

const ImagesWrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-columns: 10% 20% 20% 20% 20% 10%;
  grid-template-rows: 100%;
  align-items:center;
`

const Image = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
`

const BackgroundWrapper = styled.div`
  display: grid;
  grid-row:6;
  background-image: url(${backgroundImage});
  background-size: contain;
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
`


const OurServicesView = ({openInstagramLink}) => (
  <Wrapper>
    <Title gridRow="1">
      QUÉ OFRECEMOS
    </Title>
    <TextContain gridRow="2">
      Te hacemos unas uñikis perfectas, muy perfiladas y si no estás contento/a te devolvemos todo el dinero + 230€ en concepto de insatisfacción.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci
    </TextContain>
    <ImagesWrapper>
      <Image gridColumn="2">
        <img style={{width: '9vw'}} src={manicuraImage} alt="manicuraImage" />
      </Image>
      <Image gridColumn="3">
        <img style={{width: '9vw'}} src={peinadosImage} alt="peinadosImage" />
      </Image>
      <Image gridColumn="4">
        <img style={{width: '9vw'}} src={coloracionImage} alt="coloracionImage" />
      </Image>
      <Image gridColumn="5">
        <img style={{width: '9vw'}} src={depilacionImage} alt="depilacionImage" />
      </Image>
    </ImagesWrapper>
    <Title gridRow="4">
      CÓMO
    </Title>
    <TextContain gridRow="5">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci
    </TextContain>
    <BackgroundWrapper>
      <ImageSectionWrapper gridRow="1" gridColumn="1">
        <img style={{width: '7vw'}} src={n1Image} alt="n1Image" />
      </ImageSectionWrapper>
      <TextSectionWrapper gridRow="2" gridColumn="1" fontSize="2vw">
        SELECCIONA TU SERVICIO
      </TextSectionWrapper>
      <TextSectionWrapper gridRow="3" gridColumn="1" fontSize="0.8vw">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
      </TextSectionWrapper>
      <ImageSectionWrapper gridRow="2" gridColumn="2">
        <img style={{width: '7vw'}} src={n2Image} alt="n2Image" />
      </ImageSectionWrapper>
      <TextSectionWrapper gridRow="3" gridColumn="2" fontSize="2vw">
        DINOS CUÁNDO Y DÓNDE
      </TextSectionWrapper>
      <TextSectionWrapper gridRow="4" gridColumn="2" fontSize="0.8vw">
        Lorem ipsum dolor sit amet, consectetuer
      </TextSectionWrapper>
      <ImageSectionWrapper gridRow="1" gridColumn="3">
        <img style={{width: '7vw'}} src={n3Image} alt="n3Image" />
      </ImageSectionWrapper>
      <TextSectionWrapper gridRow="2" gridColumn="3" fontSize="2vw">
        PAGA Y PUNTÚANOS
      </TextSectionWrapper>
      <TextSectionWrapper gridRow="3" gridColumn="3" fontSize="0.8vw">
        Lorem ipsum dolor sit amet, consectetuer
      </TextSectionWrapper>
    </BackgroundWrapper>
  </Wrapper>
)

export default OurServicesView
