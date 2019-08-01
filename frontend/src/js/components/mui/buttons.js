import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Colors from '../../utils/colors'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),

  },
  input: {
    display: 'none',
  },
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
  const classes = useStyles()
  return (
    <ColorButton variant="contained" color="primary" style={style} className={classes.button} size="large" onClick={e => onClick()}>
      {text}
    </ColorButton>
  )
}
