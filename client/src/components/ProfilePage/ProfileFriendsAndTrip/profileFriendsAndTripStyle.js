import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#F4F1DE',
    backgroundColor: 'transparent',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#E3F0F2',
  },
  gridItem: {
    background: '#E3F0F2',
  },
}))

export default useStyles
