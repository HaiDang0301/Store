const express = require("express");
const router = express.Router();
const productControler = require("../app/controllers/ProductController");
router.get("/search", productControler.search);
router.get("/:slug", productControler.show);

module.exports = router;
