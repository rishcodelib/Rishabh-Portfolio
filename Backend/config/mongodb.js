const mongoose = require('mongoose')

const connectMongoDB = () => {
  mongoose.connect('mongodb://localhost:27017')
    .then(conn => {
      console.log(`MongoDB connected:${conn.connection.host}`)
    })
    .catch(err => {
      console.error(`DB connection Failed: ${err.message}`)
      process.exit(1)
    })

  module.exports = { connectMongoDB }
}