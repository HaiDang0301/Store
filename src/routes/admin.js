const express = require("express");
const router = express.Router();
const adminController = require("../app/controllers/AdminController");
router.get("/admin/product/create", adminController.create);
router.post("/admin/product/store", adminController.store);
router.get("/admin/product/list-products", adminController.products);
router.get("/admin/product/:id/edit", adminController.edit);
router.put("/admin/product/:id", adminController.update);
router.get("/:slug", adminController.show);
router.get("/", adminController.home);

module.exports = router;
