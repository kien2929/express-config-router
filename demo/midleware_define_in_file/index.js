import express from 'express'
import configRoutes from '../../index.js'
import cors from 'cors'

const app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
  express.urlencoded({ extended: true }),
  express.json(),
  express.text()
)

app.use(configRoutes())

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})