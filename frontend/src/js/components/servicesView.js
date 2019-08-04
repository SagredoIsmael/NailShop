import React from 'react'
import { connect } from 'react-redux'
import { openInstagramLink } from '../redux/actions/UI'
import styled from 'styled-components'
import Colors from '../utils/colors'
import backgroundImage from '../../img/servicesView/background.png'
import manicuraImage from '../../img/servicesView/manicura.png'
import peinadosImage from '../../img/servicesView/peinados.png'
import coloracionImage from '../../img/servicesView/coloracion.png'
import depilacionImage from '../../img/servicesView/depilacion.png'
import n1Image from '../../img/servicesView/n1.png'
import n2Image from '../../img/servicesView/n2.png'
import n3Image from '../../img/servicesView/n3.png'


const Wrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-self: center;
  align-items: center;
  flex-direction: column;
  margin-top: -10rem;
  z-index:2;
`

const SubWrapper = styled.div`
  display: flex;
  align-self: normal;
  flex-direction: row;
  margin: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 4rem;
`

const BackgroundWrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  align-self: normal;
  flex-direction: row;
  margin-top: -4rem;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  z-index:1;
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin: 0.5rem;
`

const TextContain = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin-left: 7rem;
  margin-right:7rem;
  margin-bottom: 2rem;
`

const TextContainWithoutMargins = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const ServicesView = ({openInstagramLink}) => (
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
)

const mapStateToProps = state => {
  return {test:state}
}

const mapDispatchToProps = dispatch => {
  return {
    openInstagramLink: () => {
      dispatch(openInstagramLink())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesView)
