const User = require('../model/user')


exports.getUserById = async (req, res, next, id) => {
  const user = await User.findById(id);
}

exports.