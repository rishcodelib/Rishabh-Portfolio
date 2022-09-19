const express = require('express')
const {
  createUser, getAllUsers, getUserById
} = require('../controller/userController')

const User = require('../model/userModel')

const router = express.Router()



// Routes
router.route('/user')
  .post(createUser)
  .get(getAllUsers)

router.get('/user/:id', getUserById)



module.exports = router