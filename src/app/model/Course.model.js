const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: {
    type: String,
    default: "",
    maxLength: 250,
  },
  description: {
    type: String,
    default: "",
    maxLength: 600,
  },
  image: {
    type: String,
    default: "",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Cources", Course);
