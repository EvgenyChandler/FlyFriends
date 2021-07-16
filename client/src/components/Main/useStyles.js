import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#3D405B',
    // background: '#F4F1DE',
    // backgroundSize: '100%',
    margin: '0',
    padding: '0',
    // backgroundImage: 'url(img/IMGBG3.jpg)',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    backgroundColor: 'transparent',
  },
  // overlay: {
  //   position: 'absolute',
  //   top: '0',
  //   bottom: '0',
  //   right: '0',
  //   left: '0',
  //   backgroundOverlay: 'rgba(0,0,0,.9)',
  // },
  bodyRoot: {
    flexGrow: 1,
    color: '#3D405B',
    // background: '#BCD2EE',
    // backgroundSize: '100%',
    margin: '0',
    backgroundColor: '#BCD2EE',
    // backgroundImage: 'url(img/IMGBG2.jpg)',
    backgroundPosition: 'center' /* Положение фона */,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0,3',
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
    // color: '#3D405B',
    // background: '#F4F1DE',
    backgroundColor: 'transparent',
    dp: 0,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // boxShadow: 'none',
    // color: '#3D405B',
    // background: '#F4F1DE',
    backgroundColor: 'transparent',
    // dp: 0,
  },
  paperSearch: {
    padding: theme.spacing(2),
    boxShadow: 'none',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginRight: '5%',
    marginLeft: '5%',
  },
  buttomP1: {
    margin: theme.spacing(1),
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
