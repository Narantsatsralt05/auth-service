const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: { default: Date.now(), type: Date },
});

const User = model("User", userSchema);

exports.User = User;