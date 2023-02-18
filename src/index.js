const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const route = require("./routes");
const db = require("./config/db");
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
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
//Router
route(app);

app.listen(3000);
