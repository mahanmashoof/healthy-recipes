import RecipeDescription from '../models/recipeDescription.js';

export const getRecipes = async (req, res) => {
    try {
        const recipeDescriptions = await RecipeDescription.find();
        res.status(200).json(recipeDescriptions);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRecipes = async (req, res) => {
    const recipe = req.body;
    const newRecipe = new RecipeDescription(recipe);
    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}