const mongoose = require("mongoose");
slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Product = new Schema({
  name: { type: String, unique: true },
  image: { type: String },
  description: { type: String },
  price: { type: String },
  slug: { type: String, slug: "name" },
  sl: { type: String },
});
module.exports = mongoose.model("Product", Product);
