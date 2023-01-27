const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(
      {},
      {
        password: 0,
      }
    );
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params || {};

  try {
    const user = await User.findById(id, {
      password: 0,
    });
    user.roles = Object.values(user.roles)
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  const { username, password, email, roles } = req.body || {};

  if (!username || !password || !email)
    return res.send("username, password and email is required");

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const userDocument = new User({
      username,
      password: encryptedPassword,
      email,
      roles,
    });
    const user = await userDocument.save();
    user.roles = Object.values(roles)
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
