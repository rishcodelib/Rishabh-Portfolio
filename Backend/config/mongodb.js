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
  // console.log("DB Connection SUCCESS")
  // .catch(err => console.log(err))

}
module.exports = { connectMongoDB }