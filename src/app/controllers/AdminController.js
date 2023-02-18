const { mutipleMongooseToObject } = require("../../util/mongoose");
const Product = require("../models/Product");
class AdminController {
  home(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("admin/home", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("admin/create");
  }
  store(req, res, next) {
    try {
      const product = new Product(req.body);
      product
        .save()
        .then(() => res.redirect("home"))
        .catch((err) => {
          res.send("err");
        });
    } catch (error) {}
  }
}
module.exports = new AdminController();
