const User = require('../model/user');
const router = require('../routes/userRoutes');


// exports.getUserById = async (req, res, next, id) => {
//   const user = await User.findById(id);
// }

exports.createUser = async(async(req,res) => {
  const user = req.user
  res.json(user)
})

module.exports = router