import mongoose from "mongoose";
import { Schema } from "mongoose";

const visits = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
})

const patient = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  diagnosis: {
    type: String,
  },
  age: {
    type: Number,
  },
  weekDays: {
    type: [String],
    default: []
  },
  visits: [visits],
  user_id: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at:{
    type: Date,
    default: Date.now
  }
})

const Patient = mongoose.model('Patients', patient)

export { Patient }
