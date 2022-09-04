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

  if (email || !password) {
    res.status(400)
    throw new Error(`Required Fields Cannot be empty`)
  }
  email = email.trim().toLowerCase()
  password = password.trim()
  const user = await User.findOne({ email })
  res.json({
    user
  })
})

exports.getUserById = async (req, res, next, _id) => {
  try {
    const user = await User.findById(_id).populate('user')
    if (!user) {
      res.status(400)
      throw new Error('User not found!')
    }
    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

exports.getUser = asyncHandler(async (req, res) => {
  const user = req.user
  res.json(user)
})