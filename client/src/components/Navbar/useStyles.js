import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0',
    padding: '0',
    backgroundColor: 'transparent',
  },
  bodyRoot: {
    flexGrow: 1,
    color: '#3D405B',
    margin: '0',
    // paddingBottom: '100px',
    backgroundColor: '#E3F0F2',
    // backgroundImage: 'url(img/IMGBG3.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0,3',
    minHeight: '100vh',
    paddingRight: '50px',
    paddingLeft: '50px',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none',
    color: '#3D405B',
    background: '#F4F1DE',
    backgroundColor: 'transparent',
  },
  buttomP1: {
    boxShadow: 'none',
  },
  linkToButton: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  rootCard: {
    minWidth: 275,
  },
  bulletCard: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  titleCard: {
    fontSize: 14,
  },
  posCard: {
    marginBottom: 12,
  },
  boxFooter: {
    background: '#F4F1DE',
  },
  table: {
    boxShadow: 'none',
    borderCollapse: 'none',
  },
  linkResult: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
    fontSize: 14,
  },
}))

export default useStyles
