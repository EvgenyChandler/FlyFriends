import { TextField, withStyles } from '@material-ui/core'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(198, 160, 234, .3)',
    },
    '& .MuiInputBase-multiline': {
      backgroundColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
      '& .MuiInputBase-root': {
        color: 'white',
      },
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        color: 'white',
      },
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: 'white !important',
      },
    },
  },
})(TextField)

export default CssTextField
