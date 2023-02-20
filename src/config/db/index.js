const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Shop");
    console.log("Connect Success !");
  } catch (error) {
    console.log("Connect Fail");
  }
}
module.exports = { connect };
