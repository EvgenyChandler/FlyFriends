/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Box, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeleteNewFromFriendsFlights, fetchSetLkFlightsWhereIamFriend } from '../../../../../redux/actionCreators/lkAC'
import TripsFriend from '../../TripsFriend/TripsFriend'
import './style.css'

function CarouselInvitationTrip() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2 },
    // { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ]

  const {
    userFlyLK,
    friendFlyLK,
    middleFlyLK,
  } = useSelector((state) => state.lkFlightsWhereIamAFriend)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSetLkFlightsWhereIamFriend())
    return (() => {
      dispatch(fetchDeleteNewFromFriendsFlights())
    })
  }, [])

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = (type === 'PREV') ? <img src="./paper_plane_left_icon_172972 (1).png" alt="logopng" style={{ height: '30px' }} /> : <img src="./paper_plane_right_icon_172972.png" alt="logopng" style={{ height: '30px' }} />
    return (
      <Button onClick={onClick} disabled={isEdge} style={{}}>
        {pointer}
      </Button>
    )
  }

  return (
    <Box style={{ width: '600px', height: '85vh' }}>
      <div className="cec">
        {middleFlyLK?.length || userFlyLK?.length || friendFlyLK?.length
          ? (
            <Carousel
              breakPoints={breakPoints}
              renderArrow={myArrow}
            >
              {
                middleFlyLK?.length ? (middleFlyLK.map((flight) => (
                  <TripsFriend key={flight._id} flight={flight} />
                ))
                ) : null
              }
              {
                userFlyLK?.length ? (userFlyLK.map((flight) => (
                  <TripsFriend key={flight._id} flight={flight} />
                ))
                ) : null
              }
              {
                friendFlyLK?.length ? (friendFlyLK.map((flight) => (
                  <TripsFriend key={flight._id} flight={flight} />
                ))
                ) : null
              }
            </Carousel>
          )
          : null}
      </div>
    </Box>
  )
}

export default CarouselInvitationTrip
