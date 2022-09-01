const express = require('express')
const { Mongoose } = require('mongoose')
const { connectMongoDB } = require('./config/mongodb')
const userRoutes = require('./routes/userRoutes')
const projectRoutes = require('./routes/projectRoutes')
require('dotenv').config()

const app = express()
const SERVER_PORT = process.env.SERVER_PORT

//Connect to Database
connectMongoDB

//CORS policy
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

// 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRoutes, projectRoutes)



//Handle Requests
app.get('/', (_req, res) => {
  res.send("Server is running on port ..!" + process.env.SERVER_PORT + " by " + process.env.USER_NAME)
})

// app.get("/api/user", (_req, res) => { res.send("geting all users") })

app.listen(SERVER_PORT, () => {
  console.log(`App is listening at port ${SERVER_PORT}`)
})  