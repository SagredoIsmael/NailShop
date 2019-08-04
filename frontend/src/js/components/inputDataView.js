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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: initial;
  z-index:0;
  margin-top: -17.2rem;
  margin-bottom: 2rem;
`

const SubWrapper = styled.div`
  display: flex;
  border-radius: 25px;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-top:17rem;
`

const InputDataView = ({openInstagramLink}) => (
  <Wrapper>
    <SubWrapper>
     <TextfieldOutline label="Escoge tu tratamiento" style={{margin: '8rem'}}/>
    </SubWrapper>
    <Link to="/professionals" style={{ textDecoration: 'none' }}>
      <SimpleButton text="BOOKEAR" style={{display:'flex', marginBottom: '20rem', marginTop: '2rem'}} onClick={() => null}/>
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
