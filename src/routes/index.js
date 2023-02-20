const authRouter = require("./auth");
const adminRouter = require("./admin");
function route(app) {
  app.use("/", authRouter);
  app.use("/", adminRouter);
  app.use("/:slug", adminRouter);
}
module.exports = route;
