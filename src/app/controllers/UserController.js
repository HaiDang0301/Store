const { mutipleMongooseToObject } = require("../../util/mongoose");
const Product = require("../models/Product");
class SiteController {
  home(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("home", { products: mutipleMongooseToObject(products) });
      })
      .catch(next);
  }
}
module.exports = new SiteController();
