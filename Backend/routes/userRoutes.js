const express = require('express')
const {
  createUser, getAllUsers, getUserById, updateUserById, signIn
} = require('../controller/userController')

const User = require('../model/userModel')

const router = express.Router()



// Routes
router.route('/user')
  .post(createUser)
  .get(getAllUsers)
  .put(updateUserById)
router.route('/signin')
  .post(signIn)


router.get('/user/:id', getUserById)



module.exports = router