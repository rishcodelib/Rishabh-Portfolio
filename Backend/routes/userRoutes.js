const express = require('express')

const {
  createUser,
  updateUserById,
  getUser,
  getUserById,
  resetPassword,
  getAllUsers,
} = require('../controller/user')

const router = express.Router()

router.param('userId', getUserById)
// Routes
router.route('/user').get(getAllUsers).post(createUser)

router.route('/:userId').get(getUser).put(updateUserById)

router.put('/reset-password/:userId', resetPassword)

module.exports = router