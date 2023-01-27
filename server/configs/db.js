import mongoose from 'mongoose'
import colors from 'colors'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// CONNECTION TO DB
const connectDb = async (DB_URI) => {
  try {
    mongoose.set('strictQuery', false)
    const connection = await mongoose.connect(DB_URI, options)
    console.log(colors.green('Connection to database established =>', connection.connection.host))
  } catch (error) {
    console.log(colors.red(error.message))
  }
}

export default connectDb
