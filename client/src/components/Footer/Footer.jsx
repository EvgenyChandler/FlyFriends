import {
  Box, Grid, Link, Typography,
} from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import useStyles from './useStyles'
import './footer.css'

function Footer() {
  const classes = useStyles()

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        FlyF
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    )
  }

  return (
    <footer>
      <Box height="100px" width="100%" className="footer">
        <Grid
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box style={{ marginTop: '20px' }} display="flex" flexDirection="row" justifyContent="center">
              <GitHubIcon />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ marginTop: '10px' }} display="flex" flexDirection="row" justifyContent="center">
              <Box>
                <Link className={classes.linkToButton} href="https://github.com/Alexoch-AI" style={{ borderRight: '1px solid black' }}> Алексей О.&nbsp;&nbsp;</Link>
                    &nbsp;&nbsp;
                <Link className={classes.linkToButton} href="https://github.com/EvgenyChandler" style={{ borderRight: '1px solid black' }}> Евгений Ф.&nbsp;&nbsp;</Link>
&nbsp;&nbsp;
                <Link className={classes.linkToButton} href="https://github.com/andreyzvoznikov" style={{ borderRight: '1px solid black' }}> Андрей З.&nbsp;&nbsp; </Link>
&nbsp;&nbsp;
                <Link className={classes.linkToButton} href="https://github.com/Kirill-Mukhortov"> Кирилл М.</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ marginTop: '10px' }} display="flex" flexDirection="row" justifyContent="center">
              {Copyright()}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer
