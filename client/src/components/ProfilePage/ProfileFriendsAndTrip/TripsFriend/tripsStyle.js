import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  avatarPic: {
    width: '80px',
    height: '80px',
    background: '#3D405B',
  },
  tripBox: {
    padding: '2px',
  },
  priceBox: {
    padding: '10px',
  },
  textBox: {
    // border: '1px solid #3D405B',
    outlineOffset: '40px',
    color: '#3D405B',
    padding: '5px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#DEE9F7',
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
