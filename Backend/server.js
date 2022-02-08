const express = require('express')
const app = express();


// const userRouter = require('./routes/userRoutes')
// const db = require('dotenv')
// const { connectMongoDB } = require('./config/mongodb')
const SERVER_PORT = 3000

// Connecting to Mongo DB
// const mongoose = require('mongoose')

// main().catch(e => console.log(e))

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/RishabhPortfolio')
// }

//Built-in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

//Handle Requests
app.get('/', (req, res) => {
  res.send("Rishabh Aggarwal..!")
})

app.get("/api/user", (req, res) => { res.send("geting all users") })


// Routes
// app.use('/api/user', userRoutes)

app.listen(SERVER_PORT, () => {
  console.log(`App is listening at port ${SERVER_PORT}`)
})