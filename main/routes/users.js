const express = require("express")
const {getUsers,createData,updateData,deleteData,deleteAll} = require("../controllers/users")
const router = express.Router()

router.route("/").get(getUsers)

router.route("/create").post(createData)
router.route("/update/:id").post(updateData)
router.route("/delete/:id").delete(deleteData)
router.route("/deleteAll").post(deleteAll)
module.exports = router;





















