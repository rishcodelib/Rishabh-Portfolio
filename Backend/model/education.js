const mongoose = required('mongoose');

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      trim: true
    },
    branch: {
      type: String,
      trim: true
    },
    board: {
      type: String,
      trim: true
    },
    yearOfPassing: {
      type: String,
      trim: true
    },
    location: {
      lattitude: {
        type: String
      },
      longitude: {
        type: String
      }
    }
  }, { timestamps: true }

)

module.exports = mongoose.model('education', educationSchema)
