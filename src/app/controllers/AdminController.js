const { mutipleMongooseToObject } = require("../../util/mongoose");
const { MongooseToObject } = require("../../util/mongoose");
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
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((products) => {
        res.render("admin/product/show", {
          product: MongooseToObject(products),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("admin/product/create");
  }
  store(req, res, next) {
    try {
      const product = new Product(req.body);
      product
        .save()
        .then(() => res.redirect("/"))
        .catch((err) => {
          res.send("err");
        });
    } catch (error) {}
  }
  products(req, res, next) {
    Product.find({})
      .then((product) => {
        res.render("admin/product/list-products", {
          product: mutipleMongooseToObject(product),
        });
      })
      .catch(next);
  }
  edit(req, res, next) {
    Product.findById(req.params.id)
      .then((products) => {
        res.render("admin/product/update", {
          product: MongooseToObject(products),
        });
      })
      .catch(next);
  }
  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {});
  }
}
module.exports = new AdminController();
