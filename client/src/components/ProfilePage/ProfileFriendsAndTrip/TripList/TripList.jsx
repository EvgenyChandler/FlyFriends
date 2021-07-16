/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useSelector } from 'react-redux'
import { Badge } from '@material-ui/core'
import useStyles from './tripListStyle'
import CarouselMyTrip from './CarouselMyTrip/CarouselMyTrip'
import CarouselInvitationTrip from './CarouselInvitationTrip/CarouselInvitationTrip'

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function FullWidthTabs() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  const newTrip = useSelector((state) => state.new)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <Box>
      <Badge name="trips" badgeContent={newTrip} color="secondary">
        <AppBar position="static" color="default" className={classes.tab}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs"
            classes={{
              indicator: classes.indicator,
            }}
          >
            <Tab label="Мои поездки" {...a11yProps(0)} />
            <Tab label="Предложенные поездки" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Badge>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CarouselMyTrip />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CarouselInvitationTrip />
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
