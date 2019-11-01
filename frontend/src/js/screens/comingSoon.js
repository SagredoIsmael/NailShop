import React from 'react'
import styled from 'styled-components'
import Colors from '../utils/colors'
import MediaQuery from 'react-responsive'
import backgroundComingSoon from '../../assets/img/commingSoon/backgroundComingSoon.jpg'
import windowSize from 'react-window-size';


const Wrapper = styled.div`
  flex:1;
  background-image: url(${backgroundComingSoon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
  height: ${props => props.mobile ? "85vh" : "95vh"};
`;



const commingSoon = ({windowWidth}) => {
  
  return(
    <>
      <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <Wrapper/> 
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
       <Wrapper/>
      </MediaQuery>
    </>
  )
}


export default windowSize(commingSoon)
