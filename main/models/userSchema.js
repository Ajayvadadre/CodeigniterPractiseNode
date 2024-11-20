const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    _id:{type:Number,required:true},
    name: { type: String, required: true },
    email: { type: String, required: true },

})

const userModel = mongoose.model("crud", userSchema)

module.exports = userModel;