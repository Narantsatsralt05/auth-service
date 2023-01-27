const { Router } = require("express");
const { authMiddleware } = require("../common/middleware/authMiddleware");
const {roleMiddleware} = require("../common/middleware/roleMiddleware");

const {
  getCategories,
  createCategory,
} = require("../controllers/categoryController");

exports.categoryRouter = Router()
  .all("/categories", authMiddleware)
  .get("/categories", getCategories)
  .post("/categories", roleMiddleware, createCategory);
