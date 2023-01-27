import dotenv from 'dotenv'
import connectDb from './configs/db.js'
import express from 'express'
import colors from 'colors'

dotenv.config()

// database connection
const DB_URI = process.env.MONGO_DB_URI.replace('%USER%', process.env.MONGO_DB_USER).replace(
  '%PASSWORD%',
  process.env.MONGO_DB_PASSWORD
)
connectDb(DB_URI)

// app initialize
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.listen(PORT, function () {
  console.log(colors.magenta.bold.underline('Server listening on port =>', PORT))
})
