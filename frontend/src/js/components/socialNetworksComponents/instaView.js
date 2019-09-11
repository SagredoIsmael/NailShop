import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import instaLogo from '../../../img/instaView/insta_logo.png'
import GridImages from '../muiComponents/gridImages'
import {SimpleButton} from '../muiComponents/buttons'
import image1 from '../../../img/instaView/0cb5b2d5a32ec9c525d992fe427a5e0d.jpg'
import image2 from '../../../img/instaView/05e5070122a287bca0db9e4e94f41ff0.jpg'
import image4 from '../../../img/instaView/a6b909034352a290336713cf45ed52ff.jpg'
import image5 from '../../../img/instaView/da7cebbc4185d2395c7b3e3c6f3d1d6c.jpg'

const Wrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-rows: 10% 10% 70% 10%;
  align-items: center;
`

const DefaultWrapper = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  justify-content:center;
  align-content:center;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-columns: 30% 70%;
`

const Title = styled.h1`
  font-size: 1vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const tileData = [
    {
      img: image1,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: image2,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: image4,
      title: 'Image',
      author: 'author',
      cols: 4,
    },
    {
      img: image5,
      title: 'Image',
      author: 'author',
      cols: 4,
    },
]

const InstaView = ({openInstagramLink}) => (
  <Wrapper>
    <DefaultWrapper gridRow="2">
      <button style={{display: "grid", gridRowStart: "1", gridRowEnd:"2", cursor: "pointer", border:"none", outline:"none", backgroundColor: "white"}} onClick={(e) => openInstagramLink()}>
          <ButtonWrapper>
            <DefaultWrapper gridColumn="1">
              <img style={{width: '2.5vw'}} src={instaLogo} alt="instaLogo" />
            </DefaultWrapper>
            <Title gridColumn="3">
              @orgasmi_official
            </Title>
          </ButtonWrapper>
      </button>
    </DefaultWrapper>
    <DefaultWrapper gridRow="3">
      <GridImages images={tileData}/>
    </DefaultWrapper>
  </Wrapper>
)

export default InstaView
