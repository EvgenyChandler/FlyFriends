/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import {
  Box, Grid, Paper,
} from '@material-ui/core'
import React from 'react'
import SearchResults from '../SearchResults/SearchResults'
import BirdMain from '../BirdMain/BirdMain'
import WrappedMap from '../Map/Map'
import useStyles from './useStyles'
import FormSearch from '../FormSearch/FormSearch'
import MaxFlightComp from '../MaxFlightComp/MaxFlightComp'
import './style.css'
import NeumorphShadow from '../../hooks/myNeumorphShadow'

function Main() {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      height="78vh"
    >
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <NeumorphShadow />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Box m={5}>
            <BirdMain />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paperSearch}>
          <Grid container>
            <FormSearch />
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paperSearch}>
          <Grid container>
            <MaxFlightComp />
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <SearchResults />
        </Paper>
      </Grid>
      <Box style={{ width: '100vw', height: '50vh' }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBngziUs84CjljF9EQIyCIy8ijRhKuPclo`}
          MapTypeControlOptions={false}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </Box>
    </Grid>

  )
}

export default Main
