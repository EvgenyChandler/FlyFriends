/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive'
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket'
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical'
import { Typography } from '@material-ui/core'

const mainColor = '#003399'
const lightColor = '#ecf2ff'
const borderRadius = 12

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  card: {
    overflow: 'visible',
    background: 'none',
    display: 'flex',
    minWidth: 343,
    minHeight: 150,
    paddingTop: 20,
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
    '& $moveLeft, $moveRight': {
      transition: '0.3s',
    },
    '&:hover': {
      '& $moveLeft': {
        transform: 'translateX(-8px)',
      },
      '& $moveRight': {
        transform: 'translateX(8px)',
      },
    },
    [breakpoints.up('sm')]: {
      minWidth: 400,
    },
  },
  left: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexBasis: '33.33%',
    display: 'flex',
    backgroundColor: '#fff',
  },
  media: {
    margin: 'auto',
    width: 10,
    height: 80,
    borderRadius: '50%',
  },
  right: {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: lightColor,
  },
  label: {
    padding: '0 8px',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 4,
  },
  subheader: {
    fontSize: 12,
    margin: 0,
    color: palette.text.secondary,
  },
  path: {
    flex: 1,
    flexBasis: 72,
    padding: '0 4px',
  },
  line: {
    position: 'relative',
    margin: '20px 0 16px',
    borderBottom: '1px dashed rgba(0,0,0,0.38)',
  },
  plane: {
    position: 'absolute',
    display: 'inline-block',
    padding: '0 4px',
    fontSize: 32,
    backgroundColor: lightColor,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(90deg)',
  },
  flight: {
    fontSize: 14,
    lineHeight: '24px',
    minWidth: 48,
    padding: '0 8px',
    borderRadius: 40,
    backgroundColor: '#bed0f5',
    color: mainColor,
    display: 'block',
  },
  moveLeft: {},
  moveRight: {},
}))

export const PlaneTicketCardDemo = React.memo(({ flight }) => {
  const styles = useStyles()
  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: lightColor,
    tearColor: mainColor,
  })
  return (
    <Card className={styles.card} elevation={0}>

      <div className={cx(styles.left, styles.moveLeft)}>
        <CardMedia
          className={styles.media}
          image=""
        />
      </div>
      <VerticalTicketRip
        classes={{
          ...ripStyles,
          left: cx(ripStyles.left, styles.moveLeft),
          right: cx(ripStyles.right, styles.moveRight),
        }}
      />
      <div className={cx(styles.right, styles.moveRight)}>
        <div className={styles.label}>
          <h2 className={styles.heading}>
            <Typography variant="h6">
              {flight.userCityFrom}
            </Typography>
          </h2>
          <p className={styles.subheader}>
            {flight.userPrice}
            &nbsp;₽
          </p>

        </div>
        <div className={styles.path}>
          <div className={styles.line}>
            {/* <AirplanemodeActive className={styles.plane} /> */}
          </div>
          <span>{flight.userCityTo}</span>
        </div>
        <div className={styles.label}>
          <p className={styles.heading}>
            <Typography variant="h6">
              {flight.friendCityFrom}
            </Typography>
          </p>
          <p className={styles.subheader}>
            {flight.friendPrice}
&nbsp;₽
          </p>
        </div>
      </div>
    </Card>
  )
})

export default PlaneTicketCardDemo
