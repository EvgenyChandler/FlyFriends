import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#3D405B',
    padding: theme.spacing(10),
    backgroundColor: 'transparent',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#E3F0F2',
    opacity: '0.9',

  },
  gridItem: {
    background: '#F4F1DE',
    backgroundColor: 'transparent',
  },
}))

export default useStyles
