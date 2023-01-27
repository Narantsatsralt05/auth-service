const { Router } = require("express");
const {authMiddleware} = require("../common/middleware/authMiddleware");
const {roleMiddleware} = require("../common/middleware/roleMiddleware");
const { getUsers, createUser, getUser } = require("../controllers/userController");

exports.userRouter = Router().all("/users",authMiddleware).get("/users", roleMiddleware(401) , getUsers).get("/user/:id", getUser).post("/users", createUser);

