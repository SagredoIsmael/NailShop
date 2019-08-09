import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import deburr from 'lodash/deburr'
import Downshift from 'downshift'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem'
import Constants from '../../utils/globalConstants'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
  container1: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {
    height: theme.spacing(2),
  },
}))


export const TextfieldOutline = ({label, style}) => {
  const classes = useStyles()
  return (
    <form className={classes.container} noValidate autoComplete="off">
        <TextField
        id="outlined-email-input"
        style={style}
        label={label}
        className={classes.textField}
        name="TextfieldOutline"
        margin="normal"
        variant="outlined"
      />
    </form>
  )
}

const renderInput = (inputProps) => {
  const { InputProps, classes, ref, ...other } = inputProps

  return (
    <TextField
      variant="outlined"
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
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



export const TextFieldDownshift = ({title, placeholder, style}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={style}>
      <div className={classes.divider} />
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
                label: title,
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onChange, onFocus },
                inputProps,
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
