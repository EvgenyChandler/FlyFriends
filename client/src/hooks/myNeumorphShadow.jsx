/* eslint-disable no-unused-vars */
import React from 'react'
import Box from '@material-ui/core/Box'
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph'
import { Typography } from '@material-ui/core'

const NeumorphShadow = () => {
  const [bgColor, setBgColor] = React.useState('#E3F0F2')
  const classes = useNeumorphShadowStyles({ bgColor })
  return (
    <>
      <Box classes={classes} borderRadius={16} p={3}>
        <Typography variant="h3">Fly Friends</Typography>
        <br />
        <Typography className={classes.mainTypo}>
          Есть ли у вас
          <span style={{ color: 'rgba(198, 160, 234, 1) ' }}> друзья </span>
          в других городах России? Наша команда уверена, что есть.
          Наверняка вы бы хотели с ними встретиться, погулять,
          поговорить и посидеть в хорошем баре.
          <br />
          Мы поздравляем вас, вы попали именно туда, куда нужно! Наше приложение поможет вам
          найти самый
          <span style={{ color: 'rgba(198, 160, 234, 1) ' }}> оптимальный </span>
          <span style={{ color: 'rgba(0, 0, 0, 0.5) ', fontSize: '13px' }}> (с финансовой точки зрения) </span>
          город, находящийся между вами!
          <br />
          Билеты ищутся при помощи сложного алгоритма, благодаря которому
          мы можем быть
          <span style={{ color: 'rgba(198, 160, 234, 1) ' }}> уверены </span>
          в вашей поездке.
        </Typography>
      </Box>
    </>
  )
}

export default NeumorphShadow
