const express = require('express')

const {
  createUser,
  updateUserById,
  getUser,
  resetPassword,
  getAllUsers,
} = require('../controller/user')

const router = express.Router()

// Routes
router.route('/').get(getAllUsers).post(createUser)

router.route('/:userId').get(getUser).put(updateUserById)

router.put('/reset-password/:userId', resetPassword)

module.exports = router