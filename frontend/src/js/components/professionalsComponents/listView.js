import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { SimpleButton } from '../muiComponents/buttons'
import pinkBackGround from '../../../img/searchView/background.png'
import { TextFieldDownshift, TextfieldOutline } from '../muiComponents/textFields'
import { SpinnerRound } from '../spinnersComponents/spinnerRound'

const Wrapper = styled.div`
  display: grid;
  grid-row:2;
  background-color: white;
`

const ListView = ({loading}) => (
  <Wrapper>
    { loading ? <SpinnerRound/> : null }
  </Wrapper>
)


export default ListView

/*export default class ListView extends React.Component {

  constructor(props) {
      super(props)
    }


  componentDidMount() {
    this.props.fetchProfessionals()
  }

  render = () => {
    return (
      <Wrapper>
      {this.props.loading? &&
        <SpinnerWrapper>
            <ClipLoader
              sizeUnit={"vw"}
              size={10}
              color={Colors.purpleButton}
              loading={true}  />
        </SpinnerWrapper>
        }
      </Wrapper>
    )
  }

} */
