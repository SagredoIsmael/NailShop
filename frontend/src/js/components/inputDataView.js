import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { openInstagramLink } from '../redux/actions/UI'
import styled from 'styled-components'
import Colors from '../utils/colors'
import {SimpleButton} from './mui/buttons'
import pinkBackGround from '../../img/inputDataView/background.png'
import {TextFieldDownshift} from './mui/textFields'

const Wrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${pinkBackGround});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top;
  position:relative
  z-index:0;
  margin-top: -38rem;
`

const SubWrapper = styled.div`
  display: flex;
  border-radius: 2rem;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-top:20rem;
`

const InputDataView = ({openInstagramLink}) => (
  <Wrapper>
    <SubWrapper>
     <TextFieldDownshift title="Escoge tu tratamiento" placeholder = "Manicura" style={{margin: '2rem'}}/>
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
