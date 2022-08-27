const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')



exports.createUser = asyncHandler(async (req, res) => {
  let { firstName, lastName, email, password, contact } = req.body
  firstName = firstName && firstName.toLowerCase()
  lastName = lastName && lastName.toLowerCase()
  console.log(`Data Recieved ${firstName}  ${lastName} ${email} ${password} ${contact} `)

  const user = await User.create({
    firstName,
    lastName, email, password
    , contact
  })
  res.send("User Added Success")

})

exports.getAllUsers = asyncHandler(async (_req, res) => {
  User.find({}).then(function (users) {
    res.send(users)
  })

})


