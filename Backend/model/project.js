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
      maxlength: 10,
      trim: true
    },
    category: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    date: {
      type: Date
    },
    techStack: [{
      type: String,
      trim: true,
      lowercase: true
    }],
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
    },
    version: {
      type: Number
    },
    status: {
      enum: ['inprogress', 'completed', 'planned']
    }

  },
  { timestamps: true }

)

module.exports = mongoose.model('Project', projectSchema)
