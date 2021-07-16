/* eslint-disable no-unused-vars */
import {
  Grid, Card, CardContent, Typography, Box, Button, Link,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddMiddleFlight } from '../../redux/actionCreators/flightsAC'
import useStyles from '../../hooks/useStyles'
import './searchresults.css'
import { isAuth } from '../../helpers/auth'

function SearchResults() {
  const classes = useStyles()
  const { middleFly } = useSelector((state) => state.flights)
  const dispatch = useDispatch()

  const saveToDb = () => {
    dispatch(fetchAddMiddleFlight(middleFly))
  }

  return (
    <>
      {middleFly.visible ? null : (
        <>
          {
            middleFly.title
              ? (
                <Card>
                  <CardContent style={{ marginBottom: '20px' }}>
                    <Typography variant="h5" component="h2">
                      {middleFly.status ? 'Сохранено!' : (
                        <>
                          <Typography component="h2">
                            {middleFly?.title}
                          </Typography>
                          <hr />
                          {middleFly?.title.slice(0, 30) !== 'К сожалению, нечего предложить' ? (
                            <Box className="container">
                              <hr />
                              <Box className="text1">
                                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                                  Откуда
                                </Typography>
                                {middleFly?.origin_name}
                              </Box>
                              <Box className="text20">
                                <Link className={classes.linkResult} href={`https://www.aviasales.ru/search?origin_iata=${middleFly?.origin}&destination_iata=${middleFly?.destination}&depart_date=${middleFly?.departure_at?.slice(0, 10)}&adults=1&children=0&infants=0&with_request=true`}>Купить билет!</Link>
                                <br />
                                {middleFly?.price}
                                ₽
                                {isAuth()
                                  ? (
                                    <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                                      <Button onClick={saveToDb} type="button">Сохранить поездку</Button>
                                    </Typography>
                                  ) : null}
                              </Box>
                              <Box className="text3">
                                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                                  Куда
                                </Typography>
                                {middleFly?.destination_name}
                              </Box>
                            </Box>
                          ) : null}
                        </>
                      )}
                    </Typography>
                  </CardContent>
                </Card>
              ) : null
          }
        </>
      )}
    </>
  )
}

export default SearchResults
