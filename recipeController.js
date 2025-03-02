const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      author: req.user.id,
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create recipe', error: error.message });
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('author',
::contentReference[oaicite:0]{index=0}