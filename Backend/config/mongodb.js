const mongoose = require('mongoose')

const connectMongoDB = () => {
  mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(conn => {
      console.log(`MongoDB Connected:`)
    })
    .catch(err => {
      console.error(`DB Connection Failed ${err.message}`)
      process.exit(1)
    })
}

module.exports = { connectMongoDB }