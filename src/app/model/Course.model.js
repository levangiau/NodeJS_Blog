const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
  name: {
    type: String,
    default: "",
    maxLength: 250,
    require:true
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
  videoid: {
    type: String,

  },
  level: {
    type: String,

  }, 
  // unique có ý nghĩa: tồn tại duy nhất 
  slug: { type: String, slug: 'name' ,unique:true },
  
  // mongoose version > 4.0 thì trong hàm timestamps nó sẽ tạo ra createat vs updateat
  // createAt: {
  //   type: Date,
  //   default: Date.now(),
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now(),
  // },
},{timestamps:true});

module.exports = mongoose.model("Cources", Course);
