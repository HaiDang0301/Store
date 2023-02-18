const express = require("express");
const router = express.Router();
const adminControler = require("../app/controllers/AdminController");
router.get("/admin/create", adminControler.create);
router.post("/admin/store", adminControler.store);
router.get("/admin/home", adminControler.home);

module.exports = router;
