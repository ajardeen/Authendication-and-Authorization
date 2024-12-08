const express = require("express");
const router = express.Router();
const { registerUser,loginUser,getUserInfo } = require("../Controllers/UserController");
const verifyTokenUserMiddleware = require("../Middlewares/UserMiddleware");

router.post("/register", registerUser);
router.post("/login",loginUser)
router.get("/userinfo",verifyTokenUserMiddleware,getUserInfo);

module.exports = router;
