/* eslint-disable import/no-unresolved */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#ffffff',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#E3F0F2',
    border: '1px',
    borderColor: '#3D405B',
  },
  gridItem: {
    background: '#ffffff',
  },
  // userPic: {
  //   width: '100px',
  //   height: '100px',
  //   background: 'linear-gradient(#feac5e, #c779d0, #4bc0c8)',
  //   // opacity: '1',
  //   // border: '3px solid',
  //   // borderImage: 'linear-gradient(#feac5e, #c779d0, #4bc0c8)',
  //   // borderImageSlice: '1',
  //   // borderRadius: '50%',
  // },

}))

export default useStyles
