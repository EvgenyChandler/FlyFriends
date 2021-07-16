/* eslint-disable consistent-return */
/* eslint-disable import/named */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  Button, Grid, Box,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { scroller } from 'react-scroll'
import CssTextField from '../../hooks/myMaterialComps'
import useStyles from '../../hooks/useStyles'
import { fetchSetFlights } from '../../redux/actionCreators/flightsAC'
import LoaderAirplane from '../LoaderAirplane/LoaderAirplane'
import './formSearch.css'
import { useSearchFriendContext } from '../../context/searchFriendContext'

function FormSearch() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    inputUserCity, setInputUserCity, inputFriendCity, setInputFriendCity,
  } = useSearchFriendContext()
  const [inputDate, setInputDate] = useState('')
  const [listUser, setListUser] = useState([])
  const [listFriend, setFriendUser] = useState([])
  const loader = useSelector((state) => state.flights.loader)
  const city = useSelector((state) => state.users?.currentUser?.city)

  const inputDateHandler = (e) => {
    setInputDate(e.target.value)
  }

  const handleFocus = (event) => {
    event.target.type = 'date'
  }
  const handleBlur = (event) => {
    event.target.type = 'text'
  }

  const onFocusUserHandler = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/search/city`)
    const citiesFromDB = await response.json()
    setListUser(citiesFromDB.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    }))
  }

  const onFocusFriendHandler = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/search/city`)
    const citiesFromDB = await response.json()
    setFriendUser(citiesFromDB.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    }))
  }

  const searchTicketsHandler = async () => {
    if (!inputUserCity || !inputFriendCity || !inputDate) {
      return toast.error('Необходимо заполнить все поля', {
        autoClose: 2500,
      })
    }
    dispatch(fetchSetFlights(inputUserCity, inputFriendCity, inputDate))
    setTimeout(() => {
      scroller.scrollTo('loader', {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -50,
      })
    }, 10)
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grid xs={4}>
        <Autocomplete
          onFocus={onFocusUserHandler}
          id="city 1"
          freeSolo
          defaultValue={city}
          options={listUser?.map((option) => option.name)}
          renderInput={(params) => {
            setInputUserCity(params.inputProps.value)
            return (
              <CssTextField
                {...params}
                label="Твой город"
                margin="normal"
                variant="outlined"
                style={{
                  backgroundColor: 'rgba(198, 160, 234, 0.3)',
                }}
                InputLabelProps={{
                  style: { color: 'rgba(0, 0, 0, 0.6)' },
                }}
              />
            )
          }}
        />
      </Grid>
      <Grid style={{}} xs={4}>
        <CssTextField
          style={{
            width: '90%',
            fontSize: '25px',
            marginTop: '16px',
            backgroundColor: 'rgba(198, 160, 234, 0.3)',
          }}
          InputLabelProps={{
            style: { color: 'rgba(0, 0, 0, 0.6)' },
          }}
          label="Дата"
          variant="outlined"
          value={inputDate}
          onChange={inputDateHandler}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Введите дату поездки"
          className={classes.buttomP1}
        />
      </Grid>

      <Grid xs={4}>
        <Autocomplete
          onFocus={onFocusFriendHandler}
          id="city 2"
          freeSolo
          options={listFriend?.map((option) => option.name)}
          renderInput={(params) => {
            setInputFriendCity(params.inputProps.value)
            return (
              <CssTextField
                {...params}
                label="Город друга"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  style: { color: 'rgba(0, 0, 0, 0.6)' },
                }}
                style={{
                  fontSize: '25px',
                  backgroundColor: 'rgba(198, 160, 234, 0.3)',
                  color: 'black',
                }}
              />
            )
          }}
        />
        <br />
      </Grid>
      <Grid xs={12}>
        <Button
          className="border-button"
          style={{
            fontSize: '20px', width: '35%', marginBottom: '20px',
          }}
          onClick={searchTicketsHandler}
        >
          {
            loader ? 'Идет поиск' : 'Поиск'
          }
        </Button>
        <Box paddingTop="20px" display="flex" justifyContent="center" alignItems="center">
          {
            loader ? <LoaderAirplane /> : ''
          }
        </Box>
      </Grid>
    </>
  )
}

export default FormSearch
