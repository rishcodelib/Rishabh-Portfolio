const express = require('express')
const { getAllProjects, createProject, deleteProjectById, getProjectById } = require('../controller/projectController')



const router = express.Router()

// router.param('userId', getUserById)

// Routes
router.route('/project')
  .post(createProject)
  .get(getAllProjects)

router.get('/project/:id', getProjectById)



router.route('/project/:id')
  .delete(deleteProjectById)


// router.route('/:userId').get(getUser).put(updateUserById)

// router.put('/reset-password/:userId', resetPassword)

module.exports = router