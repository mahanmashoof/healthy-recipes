import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

/* eslint-disable import/no-anonymous-default-export */
export default (recipes = [], action) => {
    switch (action.type) {
        case DELETE:
            return recipes.filter((recipe) => recipe._id !== action.payload);
        case UPDATE:
        case LIKE:
            return recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...recipes, action.payload];
        default:
            return recipes;
    }
}