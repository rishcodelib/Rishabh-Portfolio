const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true
    },
    shortName: {
      type: String,
      maxlength: 50,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    techStack: {
      type: Array
    },
    url: {
      demo: {
        type: String,
        trim: true
      },
      git: {
        type: String,
        trim: true
      },
      live: {
        type: String,
        trim: true
      },
    }

  },
  { timestamps: true }

)

module.exports = mongoose.model('User', userSchema)
