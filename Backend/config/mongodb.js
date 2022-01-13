const mongoose = require('mongoose')

const connectMongoDB = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 6607b9ca361dfac8da4dafa87a5eff2e721e4615
