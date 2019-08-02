import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { openInstagramLink } from '../redux/actions/UI'
import styled from 'styled-components'
import Colors from '../utils/colors'
import {SimpleButton} from './mui/buttons'
import pinkBackGround from '../../img/background/backgroundPink.jpg'
import {TextfieldOutline} from './mui/textFields'

const Wrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${pinkBackGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const SubWrapper = styled.div`
  display: flex;
  border-radius: 25px;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`

const InputDataView = ({openInstagramLink}) => (
  <Wrapper>
    <SubWrapper>
     <TextfieldOutline label="Escoge tu tratamiento" style={{margin: '10rem'}}/>
    </SubWrapper>
    <Link to="/professionals" style={{ textDecoration: 'none' }}>
      <SimpleButton text="BOOKEAR" style={{display:'flex', marginBottom: '10rem'}} onClick={() => null}/>
    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(InputDataView)
