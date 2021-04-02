import express from 'express';
import {getRecipes, createRecipes, updateRecipe, deleteRecipe} from '../controllers/recipes.js';

const router = express.Router();

router.get('/', getRecipes);
router.post('/', createRecipes);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;