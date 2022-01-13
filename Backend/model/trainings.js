const mongoose = required('mongoose');

const trainingSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  courseName: {
    type: String
  },
  dateOfJoining: {
    type: Date
  },
  dateOfLeaving: {
    type: Date
  },
  experience: {
    type: Number
  },
  companyWebsite: {
    type: String
  },
  modeOfTraining: {
    type: String
  },
  certification: {
    type: Boolean
  },
  certiImagePath: {
    type: String
  },
  certiCredentials: {
    type: String
  },
  certiVerificationLink: {
    type: String
  }


}, { timestamps: true }

)
module.exports = mongoose.model('training', trainingSchema)
