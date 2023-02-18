const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Account = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Account", Account);
