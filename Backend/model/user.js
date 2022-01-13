const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true
    },
    lastname: {
      type: String,
      maxlength: 50,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    salt: {
      type: String
    },
    role: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }

)

module.exports = mongoose.model('user',userSchema)
