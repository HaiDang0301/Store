const Account = require("../models/Account");
const bcrypt = require("bcrypt");
class AuthController {
  singup(req, res) {
    res.render("register");
  }
  login(req, res) {
    res.render("login");
  }
  // register(req, res, next) {
  //   try {
  //     const account = new Account(req.body);
  //     account
  //       .save()
  //       .then(() => res.redirect("/login"))
  //       .catch((err) => {
  //         res.send("err");
  //       });
  //   } catch (error) {}
  // }
  // async loginAuth(req, res, next) {
  //   try {
  //     const email = await Account.findOne({ email: req.body.email });
  //     if (!email) {
  //       res.send("Wrong Email");
  //     }
  //     if (email && email.password === req.body.password) {
  //       res.redirect("/");
  //     } else {
  //       res.send("Wrong Password");
  //     }
  //   } catch (error) {}
  // }
  // Ma hoa password
  async register(req, res, next) {
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
        res.redirect("/");
      }
    } catch (error) {}
  }
}
module.exports = new AuthController();
