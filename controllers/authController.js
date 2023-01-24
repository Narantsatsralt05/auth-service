const { generateToken } = require("../common/generateToken");
const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { username, password, email } = req.body || {};

  if (!username || !password || !email)
    return res.send("username, password and email is required");

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const userDocument = new User({
      username,
      password: encryptedPassword,
      email,
    });
    const user = await userDocument.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password)
    return res.send("username, password and email is required");

  try {
    const user = await User.findOne({ username });

    const token = generateToken({ username, password });

    const isEqual = await bcrypt.compare(password, user.password);
    if (isEqual) return res.send(token);

    res.send("Your password is incorrect");
  } catch (error) {
    throw res.send("User not found");
  }
};
