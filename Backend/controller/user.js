const User = require('../model/user');
const router = require('../routes/userRoutes');


exports.createUser = async(async (req, res) => {
  const user = req.user
  res.json(user)

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("user Exists!")
  }


})

module.exports = router.get('/user')
