const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')
const userModel = require('../model/userModel')

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

exports.signIn = asyncHandler(async (req, res) => {
  let { email, password } = req.body
  console.log(`Data Recieved is EMAIL is : ${email} Pass  is : ${password}`)

  if (!email || !password) {
    res.status(400)
    throw new Error(`Required Fields Cannot be empty`)
  }

  const newUser = await User.findOne({ 'email': email, 'password': password })

  if (!newUser) {
    res.status(404)
    throw new Error('User Not found')
  }
  else {
    res.status(200)
    res.json(newUser)
  }

})

exports.getUserById = async (req, res) => {
  try {
    console.log(`User with ID ${req.params.id} Found`)
    const user = await User.findById(req.params.id)
    res.status(200)
    res.json(user)
    if (!user) {
      res.status(400)
      throw new Error('User not found!')
    }
  } catch (error) {
    res.json(`Error is : ${error.message}`)
  }
}

exports.updateUserById = asyncHandler(async (req, res) => {
  console.log(`Requested Recieved : ${req.body}`)
  let newUser = req.body
  try {
    const user = await User.findByIdAndUpdate(newUser._id, newUser)
    console.log(`USER UPDATED WITH DETAILS : ${user.res}`)
    res.status(200)
    res.json(newUser)
  }
  catch (err) {
    res.json(err)
  }

  // const updatedUser = await User.save()

})



exports.getUser = asyncHandler(async (req, res) => {
  const user = req.user
  res.json(user)
})