const { Router } = require("express");
const {authMiddleware} = require("../common/middleware/authMiddleware");
const { getUsers, createUser } = require("../controllers/userController");

exports.userRouter = Router().get("/users", authMiddleware, getUsers).post("/users", createUser);

