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
    color: '#3D405B',
    padding: '5px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cityBox: {
    fontSize: '100vh',
    lineHeight: '100vh',
  },
  toFriendBox: {
    borderColor: '3D405B',
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
