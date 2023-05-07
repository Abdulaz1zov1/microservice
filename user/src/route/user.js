const User = require("../controller/user")
const router = require("express").Router()



router.post("/", User.CreateUser)
router.post("/login", User.login)



module.exports = router