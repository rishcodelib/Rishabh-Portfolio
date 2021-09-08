const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: false }))



//App Listening
app.listen(8080, () => {
  console.log("Server is Up and running");
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/', (req, res, next) => {
  res.json({
    message: 'API Running',
  })
})

