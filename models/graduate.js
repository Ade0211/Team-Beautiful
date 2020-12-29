const mongoose = require("mongoose");

const graduateSchema = new mongoose.Schema({
  graduate_ID: {
    type: mongoose.Schema.Types.Mixed,
  },
  fullname: {
    type: String,
    required: [true, "Full Name is required"],
  },
  headline: {
    type: String,
    required: [true, "We need this to make look good"],
  },
  current_location: {
    type: String,
    required: [true, "We need this to make you look good"],
  },
  languages: {
    type: String,
  },

  // Enumurated Type To Type
  full_time: {
     type: String,
  },
  part_time: {
     type: String,
  },
  contract: {
     type: String,
  },
  temp: {
     type: String,
  },
  willing_relocate: {
     type: String,
  },
  willing_remote: {
     type: String,
  },
  internship: {
    type: Boolean,
  },
  linkedin: {
    type: String,
  },
  website: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  upload_cv: {

    type: String,

  },
  resume_textarea: {
    type: String,
    max: 200,
  },
  id_token: {
    type: String,
  },
});

module.exports = mongoose.model("Graduate", graduateSchema);
