const cookieParser = require("cookie-parser");
const express = require("express");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const route = require("./routes");
const db = require("./config/db");
app.use(methodOverride("_method"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: { sum: (a, b) => a + b },
  })
);
db.connect();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//Static file Css
app.use(express.static(path.join(__dirname, "public")));
//Json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
//Router
route(app);
const port = 3000;
app.listen(port, console.log("Start server port : " + port));
