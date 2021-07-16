import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    background: '#F4F1DE',
  },
  searchField: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#73D2DE',
    margin: theme.spacing(0),
    width: '214px',
    height: '48px',
  },
  boxSearchFriend: {
    minHeight: '128px',
  },
}))

export default useStyles
