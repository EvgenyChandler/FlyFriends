/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import {
  Card, CardContent, Typography, Button, Link, Box, Grid,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import useStyles from '../../hooks/useStyles'
import './MaxFlightComp.css'
import { fetchAddTwoFlights } from '../../redux/actionCreators/flightsAC'
import { isAuth } from '../../helpers/auth'

function MaxFlightComp() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { userFly, friendFly } = useSelector((state) => state.flights)

  const saveCitiesToDB = (userFlight, friendFlight) => {
    dispatch(fetchAddTwoFlights(userFlight, friendFlight))
  }
  return (
    <>
      {
        userFly?.length ? (userFly.map((el, i) => (
          <>
            {el.visible ? null
              : (
                <Grid xs={12}>
                  <Card style={{ marginBottom: '10px' }} className={classes.rootCard} variant="outlined" key={el.found_at}>
                    <CardContent style={{ marginBottom: '10px' }}>
                      <Typography variant="h5" component="h2">
                        {el.status ? 'Сохранено!'
                          : (
                            <Box className="container">
                              <hr />
                              <Box className="text1">
                                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                                  <Link className={classes.linkToButton} href={`https://www.aviasales.ru/search?origin_iata=${el.origin}&destination_iata=${el.destination}&depart_date=${el.depart_date}&adults=1&children=0&infants=0&with_request=true`}>Купить билет</Link>
                                </Typography>
                                <img src="./airplane-silhouette_icon-icons.com_73099.png" alt="airplaneRight" height="23vh" />
                                {el.origin_name}
                                <Box>
                                  <Typography className={classes.posCard} color="textSecondary">
                                    {el.value}
                                    ₽
                                  </Typography>
                                </Box>
                              </Box>
                              <Box className="text2">
                                <Typography>
                                  {el.depart_date.split('-').reverse().join('-')}
                                </Typography>
                                {el.name}
&nbsp;
                                <img src="./pin_gps_location_find_map_search_icon-icons.com_59982.png" alt="airplaneRight" height="20vh" />
                                {isAuth()
                                  ? (
                                    <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                                      <Button
                                        onClick={() => saveCitiesToDB(el, friendFly[i])}
                                        className={classes.linkToButton}
                                      >
                                        Сохранить поездку
                                      </Button>
                                    </Typography>
                                  ) : null}
                              </Box>
                              <Box className="text3">
                                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                                  <Link className={classes.linkToButton} href={`https://www.aviasales.ru/search?origin_iata=${friendFly[i]?.origin}&destination_iata=${friendFly[i]?.destination}&depart_date=${friendFly[i]?.depart_date}&adults=1&children=0&infants=0&with_request=true`}>Купить билет</Link>
                                </Typography>
                                {friendFly[i]?.origin_name}
                                <Box display="inline">
                                  <img src="./airplane-silhouette_icon-icons_com_73099.WTp13.png" alt="airplaneRight" height="23vh" />
                                </Box>
                                <Typography className={classes.posCard} color="textSecondary">
                                  {friendFly[i]?.value}
                                  ₽
                                </Typography>
                              </Box>
                            </Box>
                          )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )}
          </>
        ))
        ) : null
      }
    </>
  )
}

export default MaxFlightComp
