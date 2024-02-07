const mongoose = require('mongoose');
// const validator = require('validator')

const patientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      bloodAmount: {
        type: Number,
        required: true,
      },
      gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
      },
      bloodType: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      city: {
        type: String,
        required: true,
      },
      hospitalName:{
        type:String,
        required:true
      },
      hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
      },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
