const { Router } = require("express");
const { signup, login } = require("../controllers/authController");

exports.authRouter = Router().post("/signup", signup).post("/login", login);
