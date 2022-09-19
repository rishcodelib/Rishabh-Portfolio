const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    key: {
      type: Number,
      autoIncrement: true,
      default: 0
    },
    projectName: {
      type: String,
      maxlength: 50,
      trim: true,
      // required: true
    },
    shortName: {
      type: String,
      maxlength: 6,
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
    },
    key: {
      type: String
    },
    imgSrc: {
      type: String
    }

  },
  { timestamps: true }

)
async function run() {
  const conn = await mongoose.createConnection()
  conn.model('Project', projectSchema)
  mongoose.model('Project', projectSchema);
  await mongoose.connect(process.env.MONGODB_URI);
  //  
}
run();

module.exports = mongoose.model('Project', projectSchema)
