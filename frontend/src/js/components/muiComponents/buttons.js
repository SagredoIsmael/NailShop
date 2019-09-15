import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Colors from '../../utils/colors'

const useStyles = makeStyles(theme => ({

}))

const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: Colors.purpleButton,
    '&:hover': {
      backgroundColor: Colors.purpleButtonHover,
    },
  },
}))(Button)

export const SimpleButton = ({text, style, onClick}) => {
  return (
    <ColorButton variant="contained" color="primary" style={style} onClick={e => onClick()}>
      {text}
    </ColorButton>
  )
}
