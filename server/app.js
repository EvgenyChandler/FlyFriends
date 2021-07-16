require('dotenv').config({ path: './config/.env' })
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const morgan = require('morgan')
const authRoutes = require('./routes/auth.routes')
const fileRoutes = require('./routes/file.routes')
const searchCityRouter = require('./routes/searchCityRouter')
const lkFlightsRouter = require('./routes/lkFlightsRouter')
const lkFriendsRouter = require('./routes/lkFriendsRouter')

const app = express()
const PORT = process.env.PORT || 8080
const corsMiddleware = require('./middleware/cors.middleware')
const dbConnect = require('./config/dbConnect')

app.use(fileUpload({}))
app.use(express.static('static'))
app.use(bodyParser.json())
app.use(corsMiddleware)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/search/friends', lkFriendsRouter)
app.use('/api/v1/lk/flights', lkFlightsRouter)
app.use('/api/v1/search/city', searchCityRouter)
app.use('/api/v1', authRoutes)
app.use('/api/v1', fileRoutes)

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Страница не найдена',
  })
})

async function start() {
  try {
    await dbConnect()
    app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`))
  } catch (error) {
    console.log('Server error', error.message)
    process.exit(1)
  }
}

start()
