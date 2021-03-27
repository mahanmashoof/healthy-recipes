import express from 'express';
import {getRecipes, createRecipes} from '../controllers/recipes.js';

const router = express.Router();

router.get('/', getRecipes);
router.post('/', createRecipes);

export default router;