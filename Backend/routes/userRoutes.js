const express = require('express')

const {
  createUser, getAllUsers
} = require('../controller/userController')

const router = express.Router()

// router.param('userId', getUserById)

// Routes
router.route('/user')
  .post(createUser)
  .get(getAllUsers)


// router.route('/:userId').get(getUser).put(updateUserById)

// router.put('/reset-password/:userId', resetPassword)

module.exports = router