const asyncHandler = require('express-async-handler')
const Project = require('../model/projectModel')

exports.createProject = asyncHandler(async (req, res) => {
  let { projectName, shortName, category,
    description,
    date,
    techStack,
    url,
    demo,
    git,
    live,
    version,
    status,
  } = req.body
  // console.log(`Project Data Recieved: ${projectName}  ${shortName} ${category}  `)

  const prj = await Project.create({
    projectName, shortName, category,
    description,
    date,
    techStack,
    url,
    demo,
    git,
    live,
    version,
    status,
  })
  res.send("Project Added Success")
})

exports.getAllProjects = asyncHandler(async (_req, res) => {
  Project.find({}).then(function (projects) {
    res.send(projects)
  })

})

exports.getProjectById = async (req, res) => {
  try {
    console.log(`Project with ID ${req.params.id} Found`)
    const project = await Project.findById(req.params.id)
    res.status(200)
    res.json(project)
    if (!project) {
      res.status(400)
      throw new Error('User not found!')
    }
  } catch (error) {
    res.json(`Error is : ${error.message}`)
  }
}

exports.deleteProjectById = asyncHandler(async (_req, res) => {
  const id = req.params.id;
  res.json(`ID recieved at back ek is ${id}`)
  // if (!Project) {
  //   res.status(404)
  //   throw new Error('Project Not Found')
  // }
  //  if (!removeProject) {
  //   throw new Error(`Failed to remove project ${project.id}`)
  // }
  res.status(200)
  res.json({
    message: `\'${project.id}\' plan was deleted successfully from the DB`,
  })
})




