const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: { default: Date.now(), type: Date },
  roles: { type: Object, default: {"User": 200} },
});

const User = model("User", userSchema);

exports.User = User;
