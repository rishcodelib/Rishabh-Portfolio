const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    maxlength: 50,
    trim:true,
    required:true
  },
  lastName:{
    type:String,
    maxlength:50,
    trim:true,
    required:true
  },
  contact:{
    type:Number,
    maxlength:10,
    trim:true,
  },
  email: {
    type:String, 
    maxlength:30,
    trim:true
  }
  
})