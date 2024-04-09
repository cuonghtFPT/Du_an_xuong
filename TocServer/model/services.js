const mongoose = require("mongoose");

const services = new mongoose.Schema(
  {
   img:{type:String},
   maso:{type:Number},
   giaban:{type:String},
   giathue:{type:String},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("service", services);