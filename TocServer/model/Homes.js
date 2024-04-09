const mongoose = require("mongoose");

const Homes = new mongoose.Schema(
  {
   img:{type:String},
   name:{type:String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("home", Homes);