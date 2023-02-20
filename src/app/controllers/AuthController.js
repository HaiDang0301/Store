const Account = require("../models/Account");
const cookies = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// get config vars
dotenv.config();
class AuthController {
  register(req, res) {
    res.render("register");
  }
  login(req, res) {
    res.render("login");
  }
  async registerAuth(req, res, next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const account = new Account({
        username: req.body.name,
        email: req.body.email,
        password: hashed,
      });
      account
        .save()
        .then(() => res.redirect("/login"))
        .catch((err) => {
          res.send("Account Alredy exits");
        });
    } catch (error) {
      res.send("err");
    }
  }
  async loginAuth(req, res) {
    try {
      const email = await Account.findOne({ email: req.body.email });
      if (!email) {
        res.send("Wrong Email");
      }
      const password = await bcrypt.compare(req.body.password, email.password);
      if (!password) {
        res.send("Wrong Password");
      }
      if (email && password) {
        const token = jwt.sign(
          {
            id: email.id,
            admin: email.admin,
          },
          process.env.TOKEN_SECRET,
          { expiresIn: "1800s" }
        );
        const { password, ...others } = email._doc;
        res.redirect("/");
      }
    } catch (error) {}
  }
}
module.exports = new AuthController();
