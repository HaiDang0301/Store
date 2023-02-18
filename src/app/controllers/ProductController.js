const { MongooseToObject } = require("../../util/mongoose");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const Product = require("../models/Product");
class ProductControler {
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((products) => {
        res.render("product/show", { product: MongooseToObject(products) });
      })
      .catch(next);
  }
  store(req, res, next) {
    const product = new Product(req.body);
    product
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {
        res.send("err");
      });
  }
  search(req, res, next) {
    res.render("product/search");
  }
}
module.exports = new ProductControler();
