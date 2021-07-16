import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useRoutes from './routes'

export default function App() {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}
