const express = require('express')
const { MongoClient } = require('mongodb')
const db = require('dotenv')
const app = express();

const SERVER_PORT = 3000
//Routes
app.get('/', (req, res) => {
  res.send("Rishabh Aggarwal..!")
})

app.listen(SERVER_PORT, () => {
  console.log(`App is listening at port ${SERVER_PORT}`)
})