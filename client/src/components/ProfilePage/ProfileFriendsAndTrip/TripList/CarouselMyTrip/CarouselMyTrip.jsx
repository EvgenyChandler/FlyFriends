/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Box, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph'
import { fetchSetLkFlightsWhereIamUser } from '../../../../../redux/actionCreators/lkAC'
import Trips from '../../Trips/Trips'
import './style.css'

function CarouselMyTrip() {
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
  } = useSelector((state) => state.lkFlightsWhereIamAUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSetLkFlightsWhereIamUser())
  }, [])

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = (type === 'PREV') ? <img src="./paper_plane_left_icon_172972 (1).png" alt="logopng" style={{ height: '30px' }} /> : <img src="./paper_plane_right_icon_172972.png" alt="logopng" style={{ height: '30px' }} />
    return (
      <Button onClick={onClick} disabled={isEdge} style={{}}>
        {pointer}
      </Button>
    )
  }
  const [bgColor, setBgColor] = React.useState('#E3F0F2')
  const classes = useNeumorphShadowStyles({ bgColor })

  return (
    <Box style={{ minWidth: '600px', height: '85vh' }}>
      <div className="cec">
        {middleFlyLK?.length || userFlyLK?.length || friendFlyLK?.length
          ? (
            <Carousel
              breakPoints={breakPoints}
              renderArrow={myArrow}
            >
              {
                middleFlyLK?.length ? (middleFlyLK.map((flight) => (

                  <Trips key={flight._id} flight={flight} />
                ))
                ) : null
              }
              {
                userFlyLK?.length ? (userFlyLK.map((flight) => (
                  <Trips key={flight._id} flight={flight} />
                ))
                ) : null
              }
              {
                friendFlyLK?.length ? (friendFlyLK.map((flight) => (
                  <Trips key={flight._id} flight={flight} />
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

export default CarouselMyTrip
