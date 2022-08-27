const mongoose = require('mongoose')

const connectMongoDB = async () => {
  await mongoose.
    connect('mongodb+srv://rishabh:JF07liDTCXxczy16@rishabhaggarwal.5lq46hz.mongodb.net/sample?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      console.log("DB Connection SUCCESS")
      .catch(err => console.log(err))




module.exports = { connectMongoDB }
}