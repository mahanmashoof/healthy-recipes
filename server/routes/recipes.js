import express from 'express';
import {getRecipes, createRecipes, updateRecipe, deleteRecipe, likeRecipe} from '../controllers/recipes.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getRecipes);
router.post('/', auth, createRecipes);
router.patch('/:id', auth, updateRecipe);
router.delete('/:id', auth, deleteRecipe);
router.patch('/:id/likeRecipe', auth, likeRecipe);

export default router;