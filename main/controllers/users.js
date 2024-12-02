// const { json } = require("body-parser");
const userModel = require("../models/userSchema")

const getUsers = async(req,res)=>{
    try {
      console.log(req,res )
        const user = await userModel.find()
        res.status(200).json(user)
      } catch (error) {
        console.log(error.message)
      }
}
const createData = async(req,res)=>{
   try {
    console.log(req.body)
    const payload = req.body
    const userData = new userModel(payload)
    const saveUser = await userData.save()
    // console.log(saveUser)
    res.status(201).json({saveUser})

   } catch (error) {
    console.log(error);
    res.status(400).send(error)
   }
}


const updateData = async (req, res) => {
  try {
      const id = req.params.id;
      const updated = req.body; // New data to update
      console.log(updated);
      
      const updatedUser  =  await userModel.findByIdAndUpdate(id,updated);

      if (!updatedUser ) {
          return res.status(404).json({ message: "User  not found" });
      }

      return res.status(200).json(updatedUser );
  } catch (error) {
      res.status(400).send(error);  
  }
};

const deleteData = async(req,res)=>{
  try {
    let id = req.params.id
    console.log("Data deleted of " +  id);
    const deleteUser = await userModel.findByIdAndDelete(id)
    res.status(200).json({deleteUser})
  } catch (error) {
    console.log(error)
  }
}

const deleteAll = async(req,res)=>{
  try {  
    let {ids} =  req.body
    const deleteUser = await userModel.deleteMany({"_id":{'$in':ids}})
    res.status(200).json({deleteUser})
  } catch (error) {
    console.log(error)
  }
}

const getExcelData= (req,res)=>{
  try{

  }catch{

  }
}

module.exports = {getUsers,createData,updateData,deleteData,deleteAll}