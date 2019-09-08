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
  grid-template-rows: 8% 12% 25% 8% 12% 25%;
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
`

const TextContainWithoutMargins = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Rozha One', serif;
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

    </BackgroundWrapper>

  </Wrapper>
)


/*const OurServicesView = ({openInstagramLink}) => (
  <Wrapper>
    <Title>
      QUÉ OFRECEMOS
    </Title>
    <TextContain>
      Te hacemos unas uñikis perfectas, muy perfiladas y si no estás contento/a te devolvemos todo el dinero + 230€ en concepto de insatisfacción.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci
    </TextContain>
    <SubWrapper>
      <img style={{width: '10rem', height: '10rem', margin:'auto'}} src={manicuraImage} alt="manicuraImage" />
      <img style={{width: '10rem', height: '10rem', margin:'auto'}} src={peinadosImage} alt="peinadosImage" />
      <img style={{width: '10rem', height: '10rem', margin:'auto'}} src={coloracionImage} alt="coloracionImage" />
      <img style={{width: '10rem', height: '10rem', margin:'auto'}} src={depilacionImage} alt="depilacionImage" />
    </SubWrapper>
    <Title>
      CÓMO
    </Title>
    <TextContain>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci
    </TextContain>
    <BackgroundWrapper>
      <div style={{ margin:'auto', marginTop:'10rem', flexDirection: 'row', width:'20%'}}>
        <img style={{width: '7rem', height: '7rem', marginLeft:'3rem'}} src={n1Image} alt="n1Image" />
        <Title>
          SELECCIONA TU SERVICIO
        </Title>
        <TextContainWithoutMargins>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </TextContainWithoutMargins>
      </div>
      <div style={{ margin:'auto', marginTop:'15rem', flexDirection: 'row', width:'20%'}}>
        <img style={{width: '7rem', height: '7rem', marginLeft:'3rem'}} src={n2Image} alt="n2Image" />
        <Title>
          DINOS CUÁNDO Y DÓNDE
        </Title>
        <TextContainWithoutMargins>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </TextContainWithoutMargins>
      </div>
      <div style={{ margin:'auto', marginTop:'10rem', flexDirection: 'row', width:'20%'}}>
        <img style={{width: '7rem', height: '7rem', marginLeft:'3rem'}} src={n3Image} alt="n3Image" />
        <Title>
          PAGA Y PUNTÚANOS
        </Title>
        <TextContainWithoutMargins>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </TextContainWithoutMargins>
      </div>
    </BackgroundWrapper>
  </Wrapper>
)*/

export default OurServicesView
