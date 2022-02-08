const mongoose = require('mongoose')

const username = "<localhost>";
const password = "<password>";
const cluster = "<cluster name>";
const dbname = "RishabhPortfolio";


const connectMongoDB = () => {
  mongoose.
  connect(`mongodb://localhost:27017`,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(conn => {
      console.log(`MongoDB connected:${conn.connection.host}`)
    })
    .catch(err => {
      console.error(`DB connection Failed: ${err.message}`)
      process.exit(1)
    })

  module.exports = { connectMongoDB }
}