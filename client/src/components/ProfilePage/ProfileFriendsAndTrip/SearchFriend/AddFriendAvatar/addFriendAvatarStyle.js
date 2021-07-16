import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttonAddFriend: {
    padding: '0',
    border: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  addFriendIcon: {
    color: 'black',
  },
  doneAddFriendIcon: {
    color: 'black',
  },
}))

export default useStyles
