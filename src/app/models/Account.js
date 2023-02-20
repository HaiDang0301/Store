const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Account = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true, minLenght: 6 },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Account", Account);
