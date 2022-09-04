const express = require('express')

const {
  createUser, getAllUsers, getUserById
} = require('../controller/userController')

const router = express.Router()

router.param('id', getUserById)

// Routes
router.route('/user')
  .post(createUser)
  .get(getAllUsers)


module.exports = router