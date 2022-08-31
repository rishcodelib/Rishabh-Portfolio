const asyncHandler = require('express-async-handler')
const Project = require('../model/projectModel')

exports.createProject = asyncHandler(async (req, res) => {
  let { projectName, shortName, category, status } = req.body
  console.log(`Project Data Recieved: ${projectName}  ${shortName} ${category}  `)

  const prj = await Project.create({
    projectName,
    shortName, category, status
  })

  res.send("Project Added Success")

})

exports.getAllProjects = asyncHandler(async (_req, res) => {
  Project.find({}).then(function (projects) {
    res.send(projects)
  })

})




