import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import deburr from 'lodash/deburr'
import Downshift from 'downshift'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem'
import Constants from '../../utils/globalConstants'
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    flexGrow: 1,
  },
  container1: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
  resize:{
    fontSize:'0.8vw',
  },
}))


export const TextfieldOutline = ({label, placeholder, style, icon, onChange}) => {
  const classes = useStyles()
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-email-input"
        style={style}
        label={label}  /*label is null, so there isnt label top*/
        name="TextfieldOutline"
        margin="normal"
        variant="outlined"
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        InputProps= {{
          classes: {
              input: classes.resize,
            },
            style: {
              height: '3vw'
            },
          startAdornment: icon? (
            <InputAdornment position="start">
              <img src={icon} alt="icon" style={{width:'1.5vw', padding:'1vw'}} />
            </InputAdornment>
          ) : null
        }}
      />
    </form>
  )
}

const renderInput = (inputProps) => {
  const { InputProps, classes, icon, ...other } = inputProps
  return (
    <TextField
      variant="outlined"
      InputProps={{
        classes: {
            input: classes.resize,
          },
        style: {
          height: '3vw'
        },
        ...InputProps,
        startAdornment: icon? (
          <InputAdornment position="start">
            <img src={icon} alt="icon" style={{width:'1.5vw', padding:'1vw'}} />
          </InputAdornment>
        ) : null
      }}
      {...other}
    />
  )
}


const renderSuggestion = (suggestionProps) => {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}


const getSuggestions = (value, { showEmpty = false } = {}) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : Constants.inputTratamiento.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep
      })
}



export const TextFieldDownshift = ({label, placeholder, style, icon, onChange}) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={style}>
      <Downshift id="downshift-options">
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          openMenu,
          selectedItem,
        }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onChange: event => {
              if (event.target.value === '') {
                clearSelection();
              }
            },
            onFocus: openMenu,
            placeholder: placeholder,
          })

          return (
            <div className={classes.container1}>
              {renderInput({
                fullWidth: true,
                classes,
                label: label,   /*label is null, so there isnt label top*/
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onChange, onFocus },
                inputProps,
                icon: icon
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, { showEmpty: true }).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          )
        }}
      </Downshift>
    </div>
  );
}
