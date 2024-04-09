const mongoose = require("mongoose");

const Albums = new mongoose.Schema(
  {
   img:{type:String},
   title:{type:String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("album", Albums);