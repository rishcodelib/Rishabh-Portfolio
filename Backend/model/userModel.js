const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
     firstName: {
      type: String,
      maxlength: 50,
      trim: true,
      // required: true
    },
    lastName: {
      type: String,
      maxlength: 50,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      // unique: true,
      // required: true
    },
    password: {
      type: String,
      // required: true
    },
    contact: {
      type: Number,
      // required: true
    }

  },
  { timestamps: true }

)
async function run() {
  const conn = await mongoose.createConnection()
  conn.model('User', userSchema)
  mongoose.model('User', userSchema);
  await mongoose.connect(process.env.MONGODB_URI);
  //  
}
run();

module.exports = mongoose.model("User", userSchema)