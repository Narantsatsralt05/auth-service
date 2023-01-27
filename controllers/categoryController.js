const { Category } = require("../models/categoryModel");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(categories);
  } catch (error) {
    res.send(error);
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body || {};
  try {
    const categoryDoc = new Category({ name });
    const category = await categoryDoc.save();
    res.send(category);
  } catch (error) {
    res.send(error);
  }
};
