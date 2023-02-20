const jwt = require("jsonwebtoken");
class MiddleWareTokenAdmin {
  verifyTokenAdmin(req, res, next) {
    const authHeader = req.headers.token;
    const token = authHeader && authHeader.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json("Token sai");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("Bạn ko có token");
    }
    if (req.user.admin) {
      next();
    } else {
      res.status(403).json("Ko phai admin");
    }
  }
}
module.exports = new MiddleWareTokenAdmin();
