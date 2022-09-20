const mongoose = required('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    companyName: {
      type: String
    },
    dateOfJoining: {
      type: Date,
    },
    dateOfLeaving: {
      type: Date
    },
    companyWebsite: {
      type: String,
    },
    location: {
      type: String,
    },
    projects: {
      type: String
    },
    techStack: {
      type: String
    }
  },
  { timestamps: true }

)

module.exports = mongoose.model('experience', experienceSchema)