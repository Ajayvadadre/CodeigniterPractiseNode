const express = require("express")
const bodyParser = require('body-parser')
const connectDB = require("./models/db")
const userRoutes = require("./routes/users")
const multer =  require("multer")
const csvtojson = require('csvtojson');
const app = express();
app.use(bodyParser.json());


//middleware 

app.use("/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("Hi")
})


const start =async ()=>{
    try {
        await connectDB();
        app.listen(5000,()=>{
            console.log("Server Connected");
        }) 
    } catch (error) {
        console.log(error)
    }
  
}

start();
