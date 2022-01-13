const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    aboutUser: {
      type: String,
      maxlength: 150,
    },
    objective: {
      type: String,
      maxlength: 100,
    },
    address: {
      houseNumber: {
        type: String
      },
      street: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String,
      },
      pincode: {
        type: Number
      },
      startDate: {
        type: Date
      },
      endDate: {
        type: Date,
        default: null
      }
    },
    links: {
      fb: {
        type: String
      },
      git: {
        type: String
      },
      twitter: {
        type: String
      },
      linkedin: {
        type: String
      },
      instagram: {
        type: String
      },
      portfolio: {
        type: String
      },
      other: {
        type: String
      }
    }
  },
  { timestamps: true }

)

module.exports = mongoose.model('userProfile', profileSchema)
