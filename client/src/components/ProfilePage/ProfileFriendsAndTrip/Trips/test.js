/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-one-expression-per-line */
<Box
  color={flight.new ? 'red' : 'black'}
  className={classes.tripBox}
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  m={3}
>
  <AvatarGroup max={4}>
    <Avatar
      className={classes.userPic}
      alt={flight.user.name}
      src={flight.user.avatar}
    />
    {flight.friend ? (
      <>
        <p>Я: {flight.friend?.name}</p>
        <p>Друг: {flight.user?.name}</p>
        <Avatar
          className={classes.userPic}
          alt={flight.friend?.name}
          src={flight.friend?.avatar}
        />
      </>
    ) : null}
  </AvatarGroup>
  <Box m={0} className={classes.textBox} borderRadius={16}>
    <Typography>{flight.date.split('-').reverse().join('-')}</Typography>
    <Typography variant="h5">
      {flight.friendCityFrom}
      <FlightTakeoffIcon />
      {flight.friendCityTo}
    </Typography>
    <Typography variant="h6">{flight.price} ₽</Typography>
    <FlightLandIcon />
    <Typography>Лети к другу. На двоих по {flight.price / 2} ₽</Typography>
  </Box>
  <Button onClick={() => openDeleteModalHandler(flight.type, flight)}>
    Удалить
  </Button>
  <Button onClick={() => chatBoxHandler(flight)}>чат</Button>
</Box>
