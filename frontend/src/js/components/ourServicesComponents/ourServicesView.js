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
  grid-row:3;
  grid-template-columns: 100%;
  grid-template-rows: 10% 14% 22% 10% 14% 30%;
`

const Title1 = styled.h1`
  display: grid;
  grid-row:1;
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const TextContain1 = styled.h1`
  display: grid;
  grid-row:2;
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

const Image1Wrapper = styled.div`
  display: grid;
  grid-column:2;
`

const Image2Wrapper = styled.div`
  display: grid;
  grid-column:3;
`

const Image3Wrapper = styled.div`
  display: grid;
  grid-column:4;
`

const Image4Wrapper = styled.div`
  display: grid;
  grid-column:5;
`

const Title2 = styled.h1`
  display: grid;
  grid-row:4;
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const TextContain2 = styled.h1`
  display: grid;
  grid-row:5;
  font-size: 1vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin-left: 4vw;
  margin-right: 4vw;
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
`

const ImageSection1Wrapper = styled.div`
  display: grid;
  grid-row:1;
  grid-column:1;
`

const TextSection1Wrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-column:1;
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const SubTextSection1Wrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-column:1;
  font-size: 0.8vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  align-items: end;
`

const ImageSection2Wrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-column:2;
`

const TextSection2Wrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-column:2;
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const SubTextSection2Wrapper = styled.div`
  display: grid;
  grid-row:4;
  grid-column:2;
  font-size: 0.8vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  align-items: end;
`

const ImageSection3Wrapper = styled.div`
  display: grid;
  grid-row:1;
  grid-column:3;
`

const TextSection3Wrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-column:3;
  font-size: 2vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const SubTextSection3Wrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-column:3;
  font-size: 0.8vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  align-items: end;
`

const OurServicesView = ({openInstagramLink}) => (
  <Wrapper>
    <Title1>
      QUÉ OFRECEMOS
    </Title1>
    <TextContain1>
      Te hacemos unas uñikis perfectas, muy perfiladas y si no estás contento/a te devolvemos todo el dinero + 230€ en concepto de insatisfacción.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci
    </TextContain1>
    <ImagesWrapper>
      <Image1Wrapper>
        <img style={{width: '9vw'}} src={manicuraImage} alt="manicuraImage" />
      </Image1Wrapper>
      <Image2Wrapper>
        <img style={{width: '9vw'}} src={peinadosImage} alt="peinadosImage" />
      </Image2Wrapper>
      <Image3Wrapper>
        <img style={{width: '9vw'}} src={coloracionImage} alt="coloracionImage" />
      </Image3Wrapper>
      <Image4Wrapper>
        <img style={{width: '9vw'}} src={depilacionImage} alt="depilacionImage" />
      </Image4Wrapper>
    </ImagesWrapper>
    <Title2>
      CÓMO
    </Title2>
    <TextContain2>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci
    </TextContain2>
    <BackgroundWrapper>
      <ImageSection1Wrapper>
        <img style={{width: '7vw'}} src={n1Image} alt="n1Image" />
      </ImageSection1Wrapper>
      <TextSection1Wrapper>
        SELECCIONA TU SERVICIO
      </TextSection1Wrapper>
      <SubTextSection1Wrapper>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
      </SubTextSection1Wrapper>
      <ImageSection2Wrapper>
        <img style={{width: '7vw'}} src={n2Image} alt="n2Image" />
      </ImageSection2Wrapper>
      <TextSection2Wrapper>
        SELECCIONA TU SERVICIO
      </TextSection2Wrapper>
      <SubTextSection2Wrapper>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
      </SubTextSection2Wrapper>
      <ImageSection3Wrapper>
        <img style={{width: '7vw'}} src={n3Image} alt="n3Image" />
      </ImageSection3Wrapper>
      <TextSection3Wrapper>
        SELECCIONA TU SERVICIO
      </TextSection3Wrapper>
      <SubTextSection3Wrapper>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
      </SubTextSection3Wrapper>
    </BackgroundWrapper>
  </Wrapper>
)

export default OurServicesView
