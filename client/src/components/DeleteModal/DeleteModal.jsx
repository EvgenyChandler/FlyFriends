/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Box, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModalAC } from '../../redux/actionCreators/deleteModalAC'
import { fetchDeleteLkFlightsWhereIamUser } from '../../redux/actionCreators/lkAC'
import './deleteModal.css'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
  },
  choiceButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export default function ModaleDelete() {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const dispatch = useDispatch()
  const deleteModal = useSelector((state) => state.deleteModal)

  const closeDeleteModalHandlerNO = () => {
    dispatch(closeDeleteModalAC())
  }

  const closeDeleteModalHandlerYES = () => {
    dispatch(
      fetchDeleteLkFlightsWhereIamUser(
        deleteModal.type, deleteModal.flight,
      ),
    )
    dispatch(closeDeleteModalAC())
  }

  return (
    <Modal
      open={deleteModal.open}
      onClose={closeDeleteModalHandlerNO}
      aria-labelledby="none"
      aria-describedby="none"
    >
      <Box style={modalStyle} className={classes.paper} fontFamily="Comfortaa">
        <Box display="flex" bgcolor="#e04848" boxShadow={3}>
          <Box flexGrow={1} p={2} color="white">
            Вы уверены?
          </Box>
          <Button onClick={closeDeleteModalHandlerNO} m={2}>
            <Box color="white">
              X
            </Box>
          </Button>
        </Box>
        <Box bgcolor="white" p={3}>
          {deleteModal?.flight?.friend ? 'Поездка исчезнет и у друга!' : 'Поездку не восстановить!'}
        </Box>
        <Box bgcolor="white" p={1} className={classes.choiceButton}>
          <Button
            style={{
              backgroundColor: 'white', border: '1px solid #e04848', marginRight: '3px', height: '30px', color: '#e04848',
            }}
            onClick={closeDeleteModalHandlerNO}
          >
            Нет
          </Button>
          <Button
            style={{
              backgroundColor: '#e04848', color: 'white', height: '30px',
            }}
            onClick={closeDeleteModalHandlerYES}
          >
            Да
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
