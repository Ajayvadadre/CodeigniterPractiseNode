const mongoose = require("mongoose")

let url ="mongodb+srv://anupamy316102:anupam@crud.89sbu.mongodb.net/?retryWrites=true&w=majority&appName=crud";

const connectDB = () =>{
    return mongoose.connect(url)
}
module.exports = connectDB;