const siteRouter = require("./user");
const productRouter = require("./product");
const authRouter = require("./auth");
const adminRouter = require("./admin");
function route(app) {
  app.use("/", adminRouter);
  app.use("/", authRouter);
  app.use("/:slug", productRouter);
  app.use("/", siteRouter);
}
module.exports = route;
