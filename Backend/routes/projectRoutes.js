const express = require('express')
const { getAllProjects, createProject } = require('../controller/projectController')



const router = express.Router()

// router.param('userId', getUserById)

// Routes
router.route('/project')
  .post(createProject)
  .get(getAllProjects)


// router.route('/:userId').get(getUser).put(updateUserById)

// router.put('/reset-password/:userId', resetPassword)

module.exports = router