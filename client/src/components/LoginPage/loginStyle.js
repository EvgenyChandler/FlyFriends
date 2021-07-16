import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#E4572E',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#E4572E',
  },
  linkToText: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  linkToButton: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))

export default useStyles
