const express = require('express')
const app = express();

require('dotenv').config()

const SERVER_PORT = process.env.SERVER_PORT


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
  res.send("Server is running on port ..!" + process.env.SERVER_PORT + " by " + process.env.USER_NAME)
})

app.get("/api/user", (req, res) => { res.send("geting all users") })


// Routes
// app.use('/api/user', userRoutes)

app.listen(SERVER_PORT, () => {
  console.log(`App is listening at port ${SERVER_PORT}`)
})