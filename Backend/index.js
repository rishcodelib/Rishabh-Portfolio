const express = require('express')
const { MongoClient } = require('mongodb')

const app = express();

const port = 3000;

//Routes
app.get('/', (req, res) => {
  res.send("Rishabh Aggarwal..!")
})

app.listen(port, () => {
  console.log(`App is listening at port ${port}`)
})