import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    ingredients: [String],
    description: String,
    selectedFile: String,
    creator: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const RecipeDescription = mongoose.model('RecipeDescription', recipeSchema);
export default RecipeDescription;