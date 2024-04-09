const mongoose = require("mongoose");

const sanphams = new mongoose.Schema(
  {
   size:{type:String},
   material:{type:String},
   price:{type:Number},
   img:{type:String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("sanpham", sanphams);