import express from 'express';
import {getRecipes, createRecipes, updateRecipe, deleteRecipe, likeRecipe} from '../controllers/recipes.js';

const router = express.Router();

router.get('/', getRecipes);
router.post('/', createRecipes);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);
router.patch('/:id/likeRecipe', likeRecipe);

export default router;