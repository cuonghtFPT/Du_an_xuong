const mongoose = require("mongoose");

const servicedetails = new mongoose.Schema(
  {
   name:{type:String},
   phone:{type:String},
   message:{type:String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("servicedetail", servicedetails);