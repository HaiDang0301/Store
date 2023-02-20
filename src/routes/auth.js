const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/AuthController");
router.get("/login", authController.login);
router.get("/register", authController.register);
router.post("/loginAuth", authController.loginAuth);
router.post("/registerAuth", authController.registerAuth);
module.exports = router;
