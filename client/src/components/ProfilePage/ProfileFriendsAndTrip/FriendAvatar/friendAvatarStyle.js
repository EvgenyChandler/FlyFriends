import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttonDeleteFriend: {
    padding: '0',
    border: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  deleteFriendIcon: {
    color: '#E4572E',
  },
  doneAddFriendIcon: {
    color: '#20AC64',
  },

}))

export default useStyles
