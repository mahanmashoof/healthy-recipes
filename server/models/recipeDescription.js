import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    ingredients: [String],
    description: String,
    selectedFile: String,
    creator: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const RecipeDescription = mongoose.model('RecipeDescription', recipeSchema);
export default RecipeDescription;