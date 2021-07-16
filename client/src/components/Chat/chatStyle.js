/* eslint-disable import/no-unresolved */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#E3F0F2',
    border: '1px',
    borderColor: '#3D405B',
  },
}))

export default useStyles
