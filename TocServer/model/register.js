const mongoose = require("mongoose");

const register = new mongoose.Schema(
   {
      user:{type:String},
      pass:{type:String}
   },
   {
      timestamps: true,
    }
)
module.exports = mongoose.model("register",register);