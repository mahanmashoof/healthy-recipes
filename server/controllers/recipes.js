import mongoose from 'mongoose';
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
    const newRecipe = new RecipeDescription({...recipe, creator: req.userId, createdAt: new Date().toISOString()});
    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateRecipe = async (req, res) => {
    const {id: _id} = req.params;
    const recipe = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No obj w that id');
    
    const updatedRecipe = await RecipeDescription.findByIdAndUpdate(_id, {...recipe, _id}, {new: true});
    
    res.json(updatedRecipe);
}

export const deleteRecipe = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No obj w that id');
    
    await RecipeDescription.findByIdAndRemove(id);
    res.json({message: 'Recipe deleted successfully'})
}

export const likeRecipe = async (req, res) => {
    const {id} = req.params;

    if(!req.userId) return res.json({message: 'Unauthenticated'});
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No obj w that id');

    const recipe = await RecipeDescription.findById(id);
    const index = recipe.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
        //like the recipe
        recipe.likes.push(req.userId);
    } else {
        //dislike a recipe
        recipe.likes = recipe.likes.filter((id) => id !== String(req.userId));
    }
    const updatedRecipe = await RecipeDescription.findByIdAndUpdate(id, recipe, {new: true});
    res.json(updatedRecipe);
}