const { Schema, model } = require("mongoose");

const categoryModel = new Schema({
  name: { type: String, required: true },
  createdAt: { default: Date.now(), type: Date },
});

const Category = model("Category", categoryModel);

exports.Category = Category;
