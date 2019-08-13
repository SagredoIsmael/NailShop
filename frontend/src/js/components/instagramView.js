import React from 'react'
import { connect } from 'react-redux'
import { openInstagramLink } from '../redux/actions/UI'
import styled from 'styled-components'
import Colors from '../utils/colors'
import instaLogo from '../../img/instagramView/insta_logo.png'
import GridImages from './mui/gridImages'
import {SimpleButton} from './mui/buttons'
import image1 from '../../img/instagramView/0cb5b2d5a32ec9c525d992fe427a5e0d.jpg'
import image2 from '../../img/instagramView/05e5070122a287bca0db9e4e94f41ff0.jpg'
import image4 from '../../img/instagramView/a6b909034352a290336713cf45ed52ff.jpg'
import image5 from '../../img/instagramView/da7cebbc4185d2395c7b3e3c6f3d1d6c.jpg'


const SubWrapper = styled.section`
  display: flex;
  padding:1rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin: 0.5rem;
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

const InstagramView = ({openInstagramLink}) => (
  <div style={{alignSelf:"center", display: "flex", alignItems:"center", flexDirection:"column", zIndex:3, marginTop:'-12rem'}}>
    <button style={{cursor: "pointer", border:"none", display: "flex", alignItems:"center", flexDirection:"column", outline:"none", backgroundColor: "white"}} onClick={(e) => openInstagramLink()}>
        <SubWrapper>
          <img style={{width: '2rem', height: '2rem', margin:'auto'}} src={instaLogo} alt="instaLogo" />
          <Title>
            @orgasmi_official
          </Title>
        </SubWrapper>
      </button>
      <GridImages images={tileData}/>
      <SimpleButton text="¡SÍGUENOS!" style={{display:'flex', marginTop: '4rem'}} onClick={() => openInstagramLink()}/>
  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InstagramView)
