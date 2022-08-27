const mongoose = require('mongoose')

const connectMongoDB = async () => {
  await mongoose.
    connect(process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })


}
module.exports = { connectMongoDB }