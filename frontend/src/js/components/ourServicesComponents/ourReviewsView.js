import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { Link } from 'react-router-dom'
import review1 from '../../../img/ourServicesView/reviews/reseña1.jpg'
import review2 from '../../../img/ourServicesView/reviews/reseña2.jpg'
import review3 from '../../../img/ourServicesView/reviews/reseña3.jpg'
import review4 from '../../../img/ourServicesView/reviews/reseña4.jpg'
import review5 from '../../../img/ourServicesView/reviews/reseña5.jpg'
import generalReview from '../../../img/ourServicesView/reviews/generalReview.jpg'

const Wrapper = styled.div`
  display: grid;
  grid-row:4;
  grid-template-columns: 100%;
  grid-template-rows: 10% 10% 10% 40% 10% 20%;
`

const Title = styled.h1`
  display: grid;
  grid-row: ${props => props.gridRow};
  font-size: 2.5vw;
  text-align: center;
  font-family: 'Rozha One', serif;
  margin:0;
`

const ImagesWrapper = styled.div`
  display: grid;
  grid-row:4;
  grid-template-columns: 5% 15% 3% 15% 3% 15% 3% 15% 3% 15% 5%;
  grid-template-rows: 100%;
  justify-items:center;
`

const Image = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
`

const ImageGeneralWrapper = styled.div`
  display: grid;
  grid-row:6;
`


const OurReViewsView = ({openInstagramLink}) => (
  <Wrapper>
    <Title gridRow="2">
      NUESTRAS RESEÑAS
    </Title>
    <ImagesWrapper>
      <Image gridColumn="2">
        <Link to="/professionals">
          <img style={{width: '15vw'}} src={review1} alt="review1" />
        </Link>
      </Image>
      <Image gridColumn="4">
        <img style={{width: '15vw'}} src={review2} alt="review2" />
      </Image>
      <Image gridColumn="6">
        <img style={{width: '15vw'}} src={review3} alt="review3" />
      </Image>
      <Image gridColumn="8">
        <img style={{width: '15vw'}} src={review4} alt="review4" />
      </Image>
      <Image gridColumn="10">
        <img style={{width: '15vw'}} src={review5} alt="review5" />
      </Image>
    </ImagesWrapper>
    <ImageGeneralWrapper>
      <img style={{width: '100vw', }} src={generalReview} alt="generalReview" />
    </ImageGeneralWrapper>
  </Wrapper>
)

export default OurReViewsView
