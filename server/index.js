import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipes.js';

const app = express();

app.use('/recipes', recipeRoutes); //defaults /recipes for methods

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

//connect mongoose
const CONNECTION_URL = 'mongodb+srv://mahan31:mahan31@cluster0.rmop3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) //promise function
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //if success
    .catch((error) => console.log(error.message)) //if error
mongoose.set('useFindAndModify', false); //just to skip warnings