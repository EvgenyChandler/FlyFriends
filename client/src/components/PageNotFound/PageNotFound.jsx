import React from 'react'
import { useLocation } from 'react-router-dom'
import './404.css'

const PageNotFound = () => {
  const { pathname } = useLocation()

  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="dance.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1>404</h1>
        <p>
          Вы перешли по адресу:
          <p>{`${process.env.REACT_APP_API_URL}${pathname}`}</p>
        </p>
        <h1>Видимо это не то место где вы хотели бы оказаться...</h1>
      </div>
    </>
  )
}

export default PageNotFound
